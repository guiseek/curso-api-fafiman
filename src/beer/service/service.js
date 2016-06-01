import Model    from '../model/model.js'

let Service = {
  findAll() {
    return Model.find({}).exec((err, response) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve(response)
    })
  },
  findById(id) {
    return Model.findById(id).exec((err, response) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve(response)
    })
  },
  create(data) {
    return Model(data).save((err) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve(data)
    })
  },
  update(data) {
    return Model(data).save((err) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve(data)
    })
  },
  remove(data) {
    return Model(data).remove((err) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve(data)
    })
  }
}

export default Service