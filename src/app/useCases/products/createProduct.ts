import { Request, Response } from "express";
import { Product } from "../../models/Product";


export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error on create product:", error);
    res.sendStatus(400);
  }
}

// [{"name": "Mussarela", "icon": "🧀"}, {"name": "Parmesão", "icon": "🧀"}, {"name": "Provolone", "icon": "🧀"}, {"name": "Gorgonzola", "icon": "🧀"}]
