const express = require('express')
const app = express()
const port = 8000


app.get('/obtener-informacion',  (req,res) => {
  res.send('datos obtenidos')
})

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`)
})