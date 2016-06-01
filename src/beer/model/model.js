import mongoose from 'mongoose'

let Schema = mongoose.Schema
let schema = {
    nome: {
        type: String,
        unique: true,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
}
let ModelSchema = new Schema(schema)

export default mongoose.model('Beer', ModelSchema)