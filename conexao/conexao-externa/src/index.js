const instanceAxios = require('./axios')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  const { data } = await instanceAxios.get('/pokemon/ditto')
  return res.json({data: data.abilities})
})

app.listen(3000)