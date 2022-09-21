import mongoose from 'mongoose'

const Schema = mongoose.Schema

// look at the todo-data.js file for these params - Schema
const skillSchema = new Schema ({
  text: String, 
  skilled: Boolean, 
})

// compile the schema into a model and export it
const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}