import { useEffect, useState } from "react";

const syllableStructuresToAdd: string[] = [];

export default function Syllables() {
  const [textInput, setTextInput] = useState<string>("");

  return (
    <div>
      <h1>Syllables</h1>
      <input
        className="border border-black"
        type="text"
        name="syllableStructureInput"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setTextInput(e.currentTarget.value);
        }}
        value={textInput}
        placeholder="SyllableStructure"
      />
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-400 rounded"
        onClick={() => {
          syllableStructuresToAdd.push(textInput);
          setTextInput("");
          console.log("syllableStructuresToAdd", syllableStructuresToAdd);
        }}
      >
        Add
      </button>
    </div>
  );
}
