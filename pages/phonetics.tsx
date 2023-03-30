import ConsonantsTable from "@/components/consonants";
import { Phone } from "@/types/phoneticTypes";

export default function Phonetics() {
  const consonantsToAdd: Phone[] = [];
  return (
    <div className="mx-16">
      <h1>Phonetics</h1>
      <h2>Consonants</h2>
      <ConsonantsTable consonantsToAdd={consonantsToAdd} />
      <button
        className="px-4 py-2 m-1 bg-blue-600 text-white rounded hover:bg-blue-500 active:bg-blue-400 "
        onClick={() => {
          console.log("consonantsToAdd: ", consonantsToAdd);
        }}
      >
        Save Changes
      </button>

      <h2>Vowels</h2>
      <table className="table-auto border-collapse">
        <tbody>
          <tr>
            <th>close</th>
            <td className="border border-black px-2 text-center">i</td>
            <td className="border border-black px-2 text-center">y</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɨ</td>
            <td className="border border-black px-2 text-center">ʉ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɯ</td>
            <td className="border border-black px-2 text-center">u</td>
          </tr>
          <tr>
            <th></th>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɪ</td>
            <td className="border border-black px-2 text-center">ʏ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={3}
            ></td>
            <td className="border border-black px-2 text-center">ʊ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
          </tr>
          <tr>
            <th>close-mid</th>
            <td className="border border-black px-2 text-center">e</td>
            <td className="border border-black px-2 text-center">ø</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɘ</td>
            <td className="border border-black px-2 text-center">ɵ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɤ</td>
            <td className="border border-black px-2 text-center">o</td>
          </tr>
          <tr>
            <th></th>
            <td
              className="border border-black px-2 text-center"
              colSpan={4}
            ></td>
            <td className="border border-black px-2 text-center" colSpan={2}>
              ə
            </td>
            <td
              className="border border-black px-2 text-center"
              colSpan={4}
            ></td>
          </tr>
          <tr>
            <th>open-mid</th>
            <td className="border border-black px-2 text-center">ɛ</td>
            <td className="border border-black px-2 text-center">œ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ɜ</td>
            <td className="border border-black px-2 text-center">ɞ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={2}
            ></td>
            <td className="border border-black px-2 text-center">ʌ</td>
            <td className="border border-black px-2 text-center">ɔ</td>
          </tr>
          <tr>
            <th></th>
            <td className="border border-black px-2 text-center">æ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={3}
            ></td>
            <td colSpan={2} className="border border-black px-2 text-center">
              ɐ
            </td>
            <td
              className="border border-black px-2 text-center"
              colSpan={4}
            ></td>
          </tr>
          <tr>
            <th>open</th>
            <td className="border border-black px-2 text-center">a</td>
            <td className="border border-black px-2 text-center">ɶ</td>
            <td
              className="border border-black px-2 text-center"
              colSpan={6}
            ></td>
            <td className="border border-black px-2 text-center">ɤ</td>
            <td className="border border-black px-2 text-center">o</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
