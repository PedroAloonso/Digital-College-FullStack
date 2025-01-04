import express from "express"

const app = express()
const port = 3000

app.post("/", (request, response) => {
    return response.status(200).json("Leo")
})
app.get("/", (request, response) => {
    return response.status(200).json("Leo")
})

app.listen(port, (error) => {
    console.log("App is ruuning")
})

