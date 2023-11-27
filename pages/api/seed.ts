import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database/";
import Entry from "../../models/Entry";
import { seedData } from "../../database";

type Data =
  | {
      name: string;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "Not allowed" });
  }
  console.log("before connectToDB");
  await db.connectToDB();
  console.log("after connectToDB");
  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);

  await db.disconnectToDB();

  res.status(200).json({ message: "Suceess seeding db" });
}
