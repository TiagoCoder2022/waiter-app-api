import { Request, Response } from "express";
import { Product } from "../../models/Product";


export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error on list products:", error);
    res.sendStatus(500)
  }
}
