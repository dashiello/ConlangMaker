export default function grammar() {
  return (
    <div>
      <h1>Grammar</h1>
      <div className="mt-2">
        {"S -> "} <input type="text" className="border border-black rounded" />
        {" NP, VP"}
      </div>
      <div className="mt-2">
        {"NP -> "} <input type="text" className="border border-black rounded" />
        {" D, AP, N"}
      </div>
      <div className="mt-2">
        {"VP -> "} <input type="text" className="border border-black rounded" />
        {" V, NP"}
      </div>
      <div className="mt-2">
        {"AP -> "} <input type="text" className="border border-black rounded" />
        {" A, PP"}
      </div>
      <div className="mt-2">
        {"PP -> "} <input type="text" className="border border-black rounded" />
        {" P, PP, NP"}
      </div>
    </div>
  );
}
