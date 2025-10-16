import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    texto: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
