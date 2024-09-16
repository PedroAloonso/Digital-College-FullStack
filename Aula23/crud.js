let cars = JSON.parse(localStorage.getItem("cars")) || [];
const carForm = document.querySelector('#carForm')
carForm.addEventListener('submit', saveCar)

function saveCar(event) {
    event.preventDefault()
    const carIdValue = carId.value;
    const marcaValue = marca.value;
    const modeloValue = modelo.value;
    const anoValue = ano.value;

    const carData = {
        marcaValue,
        modeloValue,
        anoValue,
    };

    if (carIdValue) {
        cars[carIdValue] = carData;
    } else {
        cars.push(carData);
    }

    localStorage.setItem("cars", JSON.stringify(cars));
    carForm.reset();
    carIdValue.value = "";
    renderCarTable();
}

function renderCarTable() {
    carTableBody.innerHTML = ``
    console.log(cars)
    cars.forEach((car, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${index+1}</td>
        <td>${car.marcaValue}</td>
        <td>${car.modeloValue}</td>
        <td>${car.anoValue}</td>
        <td class="actions">
            <button class='edit' onClick="editCar(${index})">Editar</button>
            <button class='delete' onClick="deleteCar(${index})">Deletar</button>
        </td>
        `
        carTableBody.appendChild(row)
    })
}

function editCar(index) {
    const car = cars[index]
    carId.value = index
    marca.value = car.marcaValue
    modelo.value = car.modeloValue
    ano.value = car.anoValue

}

function deleteCar(index) {
    console.log('deletar')
    cars.splice(index, 1)
    localStorage.setItem('cars', JSON.stringify(cars))
    renderCarTable()
}

window.onload = renderCarTable