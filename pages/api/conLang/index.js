import { getSession, getToken } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { name } = req.body;
  
  const session = await getSession({ req });
  // console.log("session ", session);
  const result = await prisma.conLang.create({
    data: {
      name: name,
      ownerId: session?.user?.id,
    },
  });
  res.json(result);
}
