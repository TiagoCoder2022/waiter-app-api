import { Request, Response } from "express";
import { Order } from "../../models/Order";


export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      res.status(400).json({ error: "Status should be one of these WAITING, IN_PRODUCTION or DONE" });
    }

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status }
    ).populate('products.product');

    if (!order) {
      res.status(404).json({ error: "Order not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error on list orders:", error);
    res.sendStatus(500);
  }
}
