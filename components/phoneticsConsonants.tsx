import { Phone } from "@/types/languageTypes";

export default function ConsonantsTable({
  consonantsToAdd,
}: {
  consonantsToAdd: Phone[];
}) {
  const addToConsonants = (symbol: string, features: string) => {
    consonantsToAdd.push({
      symbol,
      features,
      name: "",
    });
  };
  return (
    <table className="table-auto border-collapse border border-black">
      <thead>
        <tr className="border border-black">
          <th></th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Bilabial
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Labiodental{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Dental{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Alveolar{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Post alveolar{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Retroflex{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Palatal{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Velar{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            vular{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Pharyngeal{" "}
          </th>
          <th
            colSpan={2}
            className="cursor-pointer text-center border border-black px-2"
          >
            Glottal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border border-black">Plosive</th>
          <td
            className="cursor-pointer cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("p", "---+----------+---000--00000")}
          >
            p
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("b", "")}
          >
            b
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("t", "")}
          >
            t
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("d", "")}
          >
            d
          </td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʈ", "")}
          >
            ʈ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɖ", "")}
          >
            ɖ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("c", "")}
          >
            c
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɟ", "")}
          >
            ɟ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("k", "")}
          >
            k
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("g", "")}
          >
            g
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("q", "")}
          >
            q
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɢ", "")}
          >
            ɢ
          </td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʔ", "")}
          >
            ʔ
          </td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Nasal</th>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("m", "")}
          >
            m
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɱ", "")}
          >
            ɱ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("n", "")}
          >
            n
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɳ", "")}
          >
            ɳ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɲ", "")}
          >
            ɲ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ŋ", "")}
          >
            ŋ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɴ", "")}
          >
            ɴ
          </td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Trill</th>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʙ", "")}
          >
            ʙ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("r", "")}
          >
            r
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʀ", "")}
          >
            ʀ
          </td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Tap</th>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ⱱ", "")}
          >
            ⱱ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɾ", "")}
          >
            ɾ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɽ", "")}
          >
            ɽ
          </td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Fricative</th>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɸ", "")}
          >
            ɸ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("β", "")}
          >
            β
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("f", "")}
          >
            f
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("v", "")}
          >
            v
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("θ", "")}
          >
            θ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ð", "")}
          >
            ð
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("s", "")}
          >
            s
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("z", "")}
          >
            z
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʃ", "")}
          >
            ʃ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʒ", "")}
          >
            ʒ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʂ", "")}
          >
            ʂ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʐ", "")}
          >
            ʐ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ç", "")}
          >
            ç
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʝ", "")}
          >
            ʝ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("x", "")}
          >
            x
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɣ", "")}
          >
            ɣ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("χ", "")}
          >
            χ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʁ", "")}
          >
            ʁ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ħ", "")}
          >
            ħ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʕ", "")}
          >
            ʕ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("h", "")}
          >
            h
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɦ", "")}
          >
            ɦ
          </td>
        </tr>
        <tr>
          <th className="border border-black">Lateral Fricative</th>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɬ", "")}
          >
            ɬ
          </td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɮ", "")}
          >
            ɮ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Approximant</th>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʋ", "")}
          >
            ʋ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɹ", "")}
          >
            ɹ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɻ", "")}
          >
            ɻ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("j", "")}
          >
            j
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɰ", "")}
          >
            ɰ
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
        <tr>
          <th className="border border-black">Lateral Approximant</th>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("l", "")}
          >
            l
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ɭ", "")}
          >
            ɭ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʎ", "")}
          >
            ʎ
          </td>
          <td></td>
          <td
            className="cursor-pointer text-center bg-gray-100 border border-black"
            onClick={() => addToConsonants("ʟ", "")}
          >
            ʟ
          </td>
          <td></td>
          <td></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
          <td className="bg-gray-500 border border-black"></td>
        </tr>
      </tbody>
    </table>
  );
}
