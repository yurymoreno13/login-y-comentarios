import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    // ⚠️ Solo para práctica: sin hash según enunciado.
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
