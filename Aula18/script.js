var pc = {
    ram: 8,
    cpu: "I7 gen8",
    motherboard: "Prime Z390-P LGA1151",
    ps: "Corsair 1000w",
    gpu: "RTX4080",
    ligado: true,

    ligar: () => {
        if(this.ligado) {
            console.log('Ja está ligado')
        } else {
            console.log('Ligando');
            for(var i=0; i < 5; i++) console.log('.\n');
            console.log('Ligado');
        }
    },
    desligar: () => {
        if(this.ligado){
            console.log('Desligando');
            for(var i=0; i < 5; i++) console.log('.\n');
            console.log('-------');
            this.ligado = !this.ligado
        } else {
            console.log('Precisa ta ligado para desligar XD');
        }
    },
    abrirApp: app => console.log(`Abrindo ${app}`),
    mudarRAM: Gb => this.ram = Gb
}

