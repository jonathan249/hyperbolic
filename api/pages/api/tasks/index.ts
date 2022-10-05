import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "../../../utils/DB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDb();
  const tasks = await db.collection("tasks").find().toArray();

  res.json({
    tasks,
  });
}
