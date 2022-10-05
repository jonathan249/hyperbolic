import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../../utils/DB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body.title !== "string") {
      throw new Error("bad input");
    }

    const db = await connectToDb();
    const today = new Date();

    await db.collection("tasks").insertOne({
      title: req.body.title,
      repeat: req.body.repeat,
      category: req.body.category,
    });

    res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    res.redirect("/api/tasks");
  }
}
