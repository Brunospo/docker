const instanceAxios = require('./axios')
const express = require('express')
const knex = require('./knex')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  const { data } = await instanceAxios.get('/pokemon/ditto')
  return res.json({data: data.abilities})
})

app.post('/add', async (req, res) => {
  const {nome, email} = req.body

  if (!nome) {
    return res.status(500).json({message: "nome obrigatorio"})
  }
  if (!email) {
    return res.status(500).json({message: "email obrigatorio"})
  }

  try {
    const nomeInserido = await knex('usuarios').insert({nome, email}).returning('*')

    return res.json({nomeInserido})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
})

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await knex('usuarios')
    return res.json({usuarios})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
})

app.listen(3000)