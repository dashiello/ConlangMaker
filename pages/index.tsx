import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useContext, useState } from "react";
import prisma from "../lib/prisma";
import { GetServerSideProps, GetStaticProps } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Header from "@/components/header";
import LocalLanguageContext from "@/contexts/localLanguage";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ conlangs }: { conlangs: any }) {
  const [newLang, setNewLang] = useState<string>("");

  // const [conlangs, setConlangs] = useState<string[]>([]);

  const { language, setLanguage } = useContext(LocalLanguageContext);

  const { data: session } = useSession();

  // console.log("feed: ", feed);
  console.log("session: ", session);
  console.log("conlangs: ", conlangs);

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
            <button
              className="px-4 py-2 mx-2 rounded text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-400"
              onClick={() => {
                createLanguage(newLang);
                setLanguage({ ...language, name: newLang });
                // setNewLang("");
              }}
            >
              Add
            </button>
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

const createLanguage = async (languageName: string) => {
  try {
    const body = { name: languageName };
    await fetch("/api/conLang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await Router.push("/");
  } catch (error) {
    console.error(error);
  }
};
