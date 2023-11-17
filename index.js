const express = require('express')
const cors = require('cors')

const app = express()
const port = 3030

app.use(cors())

// Definir vistas
app.use(express.static('public'))
app.use('/home', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(port, () => {
  console.log(`Servidor corriende en el puerto ${port}`)
})