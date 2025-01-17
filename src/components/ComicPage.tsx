import Comic from "../interfaces";
import { useLocation, Link } from "react-router-dom";

const creatorsText = (creators: Array<any>) => {
  let c: String = "";
  for (let i: number = 0; i < creators.length - 1; i++) {
    c = c + `${creators[i].name}-${creators[i].role}, `;
  }
  c =
    c +
    creators[creators.length - 1].name +
    " " +
    `(${creators[creators.length - 1].role}).`;
  return c;
};

function ComicPage() {
  const location = useLocation();
  const comic: Comic = location.state;
  const imgUrl: string = `${comic.path}.${comic.extension}`;

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-red-600 py-5 bg-zinc-900">
        MARVEL COMICS
      </h1>
      <hr className="border-yellow-600" />
      <div className="mr-8 ml-8 mt-12 mb-16 pb-16 pt-9 bg-zinc-900 shadow-2xl shadow-zinc-900 text-zinc-300">
      <div className="ml-16">
        <Link className="bg-zinc-800 border-zinc-600 border-2 hover:bg-red-900 p-2 rounded-br-lg rounded-tl-lg text-zinc-300 font-semibold" to="/">Go back</Link>
      </div>
        <div className="my-10 mx-16 flex flex-row">
          <img
            className="object-contain h-70 w-80 bg-zinc-900 shadow-lg shadow-slate-700 border-2 border-red-900 rounded-br-lg rounded-tl-lg"
            src={imgUrl}
          />
          <ul className="ml-16 list-disc">
          <h2 className="text-xl font-bold mb-10 text-yellow-100">{comic.title}</h2>
            {comic.description === "" || "#N/A" ? (
              ""
            ) : (
              <p>{comic.description}</p>
            )}
            
            <li className="mb-4 ml-4">
              <span className="font-bold">Creators:</span>{" "}
              {comic.creators.length === 0
                ? "No information available"
                : creatorsText(comic.creators)}
            </li>
            <li className="mb-4 ml-4">
              <span className="font-bold">Page number: </span>
              {comic.pageCount} pages.
            </li>
            {comic.isbn === "" ? (
              ""
            ) : (
              <li className="mb-4 ml-4">
                <span className="font-bold">ISBN: </span>
                {comic.isbn}.
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ComicPage;
