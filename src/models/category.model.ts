import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }
});

categorySchema.index({ parent: 1 });

export default mongoose.model('Category', categorySchema);