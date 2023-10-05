import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export async function conLangCreate(
  conLangname: string,
  ownerIdNumber: string
) {
  const result = await prisma.conLang.create({
    data: {
      name: conLangname,
      owner: {
        connect: { id: ownerIdNumber },
      },
    },
  });
  return result;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  console.log("session: ", session);
  switch (req.method) {
    case "POST":
      const { conLangName } = req.body;
      console.log("conLangName: ", conLangName);
      return res
        .status(201)
        .json(await conLangCreate(conLangName, session.user.id));
  }
}
