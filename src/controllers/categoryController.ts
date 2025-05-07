import { Request, Response } from 'express';
import Category from '../models/category.model';
import { buildTree } from '../utils/treeBuilder';

export const createCategory = async (req: Request, res: Response) => {
  const { name, parent, status } = req.body;
  const category = new Category({ name, parent: parent || null, status });
  await category.save();
  res.status(201).json(category);
};

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await Category.find();
  const tree = buildTree(categories);
  res.json(tree);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { name, status } = req.body;
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  if (name) category.name = name;
  if (status) {
    category.status = status;
    if (status === 'inactive') {
      const descendants = await Category.find({ parent: category._id });
      for (const child of descendants) {
        child.status = 'inactive';
        await child.save();
      }
    }
  }

  await category.save();
  res.json(category);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  await Category.updateMany({ parent: category._id }, { parent: category.parent });
  await category.deleteOne();
  res.json({ message: 'Category deleted' });
};