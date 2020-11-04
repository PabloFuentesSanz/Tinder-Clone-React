import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("cards", cardSchema);
