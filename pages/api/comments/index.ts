import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const entries = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        text: entry.text,
        user: entry.user,
        created_at: entry.createdAt,
      }))
    );
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(403).send("Unauthorized");
  }
  if (session.user) {
    const { email } = session?.user;
    const userInfo = await prisma.user.findFirst({ where: { email } });
    if (!userInfo) return res.status(403).send("Unauthorized");
    if (req.method === "POST") {
      const newEntry = await prisma.comment.create({
        data: {
          text: (req.body.text || "").slice(0, 500),
          userId: userInfo.id,
        },
      });

      return res.status(200).json({
        id: newEntry.id.toString(),
        text: newEntry.text,
        created_at: newEntry.createdAt,
      });
    }

    return res.send("Method not allowed.");
  }
}
