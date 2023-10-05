import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Header from "@/components/header";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

const createLanguage = async (conlangName: string) => {
  try {
    const body = { conLangName: conlangName };
    await fetch("/api/conLang", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await Router.push("/");
  } catch (error) {
    console.error(error);
  }
};

export default function Home({ conlangs }: { conlangs: any }) {
  const [newLang, setNewLang] = useState<string>("");

  return (
    <>
      <Head>
        <title>Conlang Maker</title>
        <meta
          name="description"
          content="A place to make and manage a constructed language"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div>
          <h2>Languages:</h2>
          {conlangs.map((conlang: any, index: number) => {
            return <div key={index}>{conlang.name}</div>;
          })}
          <div className="p-2 m-2">
            <strong>New Conlang: </strong>
            <input
              className="border border-black"
              type="text"
              onChange={(element) => {
                setNewLang(element.target.value);
              }}
              value={newLang}
            />
            <input
              type="submit"
              value={"Add"}
              className="px-4 py-2 mx-2 rounded text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-400"
              onClick={() => {
                createLanguage(newLang);
                setNewLang("");
              }}
            />
          </div>
        </div>

        <div>
          <h2>Language Features: </h2>
          <ul>
            <li>
              <Link href={"/phonetics"} className="m-4">
                Phonetics
              </Link>
            </li>
            <li>
              <Link href={"/syllables"} className="m-4">
                syllable Structures
              </Link>
            </li>
            <li>
              <Link href={"/morphology"} className="m-4">
                Morphology
              </Link>
            </li>
            <li>
              <Link href={"/grammar"} className="m-4">
                Grammar
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="m-4">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { conlangs: [] } };
  }
  const conlangs = await prisma.conLang.findMany({
    where: {
      owner: { email: session.user?.email },
    },
    include: {
      owner: {
        select: { name: true },
      },
    },
  });

  return { props: { conlangs } };
};
