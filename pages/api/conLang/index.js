import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handle(req, res) {
  const { name } = req.body;
  const session = await getServerSession(req, res, authOptions);
  console.log("session: ", session);
  const result = await prisma.conLang.create({
    data: {
      name: name,
      ownerId: session?.user?.id,
    },
  });
  res.json(result);
}
