import { useEffect, useState } from "react";
import ComicPreview from "./ComicPreview";
import Comic from "../interfaces";

function ComicsList() {
  const [comicsList, setComicsList] = useState<Comic[]>([]);

  const loadComics = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_APIKEY
      }&hash=${import.meta.env.VITE_HASH}`
    );
    const result = await response.json();
    //console.log(result);
    const comicsResults: Array<any> = result.data.results;
    //console.log(comicsResults);
    const comics: Array<Comic> = [];
    comicsResults.forEach(elem => {
      const comic: Comic = {
        dates: [...elem.dates],
        description: elem.description,
        id: elem.id,
        isbn: elem.isbn,
        pageCount: elem.pageCount,
        path: elem.thumbnail.path,
        extension: elem.thumbnail.extension,
        title: elem.title,
        creators: [...elem.creators.items],
      };
      comics.push(comic);
    }); 
    console.log(comics);
    //console.log(Object.values(comics[0].creators[0]));
    //console.log(comics[0].creators[0].name)
    setComicsList(comics);
  };

  useEffect(() => {
    loadComics();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-red-600 py-5 bg-zinc-900">
        MARVEL COMICS
      </h1>
      <hr className="border-yellow-600" />
      {comicsList.length === 0? <div className="text-xl font-bold text-center m-10 text-white">Loading...</div>:
      <div className="grid grid-cols-4 gap-5 mr-8 ml-8 mt-12 mb-16 pb-16 pt-9 bg-zinc-900 shadow-2xl shadow-zinc-900">
        {comicsList.map((comic: Comic) => (
          <ComicPreview key={comic.id} comic={comic} />
        ))}
      </div>}
    </>
  );
}

export default ComicsList;
