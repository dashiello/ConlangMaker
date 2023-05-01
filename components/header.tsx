import { signOut, signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-row justify-between my-2">
      <h1 className="font-bold mx-4 text-xl">Conlang Maker</h1>
      {session ? (
        <div>
          <p>Welcome {session.user?.name}! </p>
          <button
            className="bg-blue-600 hover:bg-blue-500 active:bg-blue-400 text-white px-4 py-2 rounded"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <p>Please Sign In to Save Data</p>
          <button
            className="bg-blue-600 hover:bg-blue-500 active:bg-blue-400 text-white px-4 py-2 rounded"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
