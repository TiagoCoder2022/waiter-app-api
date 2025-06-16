import { Router } from 'express'
import { listCategory } from "./app/useCases/categories/listCategory";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

router.get("/categories", listCategory);

router.post("/categories", createCategory);

router.get('/products', (req, res) => {
  res.send('OK')
})

router.post('/products', (req, res) => {
  res.send('OK')
})

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

router.get('/orders', (req, res) => {
  res.send('OK')
})

router.post('/orders', (req, res) => {
  res.send('OK')
})

router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})
