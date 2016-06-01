import Service      from '../service/service.js'

let controller = {
  findAll(req, res, next) {
    Service.findAll() 
      .then(response => res.json(response))
      .catch(next)
  },
  findOne(req, res, next) {
    res.json(req.cerveja)
  },
  findById(req, res, next, id) {
    Service.findById(id)
      .then(response => {
        req.cerveja = response
        next()
      })
      .catch(next)
  },
  create(req, res, next) {
    Service.create(req.body)
      .then(response => { res.json(response) })
      .catch(next)
  },
  update(req, res, next) {
    let cerveja = req.cerveja
    cerveja.nome = req.body.nome
    cerveja.volume = req.body.volume
    Service.update(cerveja)
      .then(response => res.json(response))
      .catch(error => res.json(next) )
  },
  remove(req, res, next) {
    Service.remove(req.cerveja)
      .then(response => res.json(response))
      .catch(next)
  }
}

export default controller