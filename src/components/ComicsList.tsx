import { useEffect, useState } from "react";
import Comic from "./Comic";

function ComicsList() {
  const [comicsList, setComicsList] = useState([]);

  const loadComics = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_APIKEY
      }&hash=${import.meta.env.VITE_HASH}`
    );
    const result: any = await response.json();
    const obj = result["data"]["results"];
    console.log(obj.length);

    setComicsList(obj);
  };

  useEffect(() => {
    loadComics();
  }, []);

  if (comicsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-red-600 py-5 bg-zinc-900">
        MARVEL COMICS
      </h1>
      <hr className="border-yellow-600" />
      <div className="grid grid-cols-4 gap-5 mr-8 ml-8 mt-12 mb-16 pb-16 pt-9 bg-zinc-900 shadow-2xl shadow-zinc-900">
        {comicsList.map((comic) => (
          <Comic key={comic["id"]} title={comic["title"]} />
        ))}
      </div>
    </>
  );
}

export default ComicsList;
