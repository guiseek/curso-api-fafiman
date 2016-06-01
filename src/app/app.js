import express    from 'express'
import mongoose   from 'mongoose'
import cors       from 'cors'
import bodyParser from 'body-parser'

import config     from '../../config/config.js'

import apiRouter  from './config/routes.js'

let db = mongoose.connect(config.db, (err) => {
  if (err) {
    console.error('Sem conexão com MongoDB!')
    console.error(err)
  }
})

let app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.listen(app.get('port'), () => console.log('Ouvindo na porta ' + app.get('port')))