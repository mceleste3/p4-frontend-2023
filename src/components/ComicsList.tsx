import { useEffect, useState } from "react";
import Comic from "./Comic";

function ComicsList() {
  const [comicsList, setComicsList] = useState<Comic[]>([]);

  interface Comic {
    dates: Array<Object>;
    description: string;
    id: number;
    isbn: string;
    pageCount: number;
    path: string;
    extension: string;
    title: string;
  }

  const loadComics = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_APIKEY
      }&hash=${import.meta.env.VITE_HASH}`
    );
    const result = await response.json();
    //console.log(result);
    const comicsResults: Array<any> = result.data.results;
    //console.log(comicsResults.length);
    const comics: Array<Comic> = [];
    comicsResults.forEach(elem => {
      const comic: Comic = {
        dates: elem.dates,
        description: elem.description,
        id: elem.id,
        isbn: elem.isbn,
        pageCount: elem.pageCount,
        path: elem.thumbnail.path,
        extension: elem.thumbnail.extension,
        title: elem.title,
      };
      comics.push(comic);
    }); 
    console.log(comics);
    //console.log(Object.keys(comics[0]));
    setComicsList(comics);
  };

  useEffect(() => {
    console.log("datos");
    loadComics();
  }, []);

  if (comicsList.length === 1) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-red-600 py-5 bg-zinc-900">
        MARVEL COMICS
      </h1>
      <hr className="border-yellow-600" />
      <div className="grid grid-cols-4 gap-5 mr-8 ml-8 mt-12 mb-16 pb-16 pt-9 bg-zinc-900 shadow-2xl shadow-zinc-900">
        {comicsList.map((comic:Comic) => (
          <Comic key={comic.id} title={comic.title} path={comic.path} extension={comic.extension} />
        ))}
      </div>
    </>
  );
}

export default ComicsList;
