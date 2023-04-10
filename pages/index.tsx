import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import prisma from "../lib/prisma";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ feed }: { feed: any }) {
  const [newLang, setNewLang] = useState<string>("");

  const [conlangs, setConlangs] = useState<string[]>([]);

  console.log("feed: ", feed);

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
        <h1>Conlang Maker</h1>

        <div>
          <h2>Languages:</h2>
          {conlangs.map((conlang: any, index: number) => {
            return <div key={index}>{conlang}</div>;
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
                setConlangs(conlangs.concat(newLang));
                setNewLang("");
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

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};
