import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategory(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error on list categories:", error);
    res.sendStatus(500)
  }
}
