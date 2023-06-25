import { useEffect, useState } from "react";
import ComicPreview from "./ComicPreview";
import Comic from "../interfaces";

function ComicsList() {
  const [comicsList, setComicsList] = useState<Comic[]>([]);
  const [search, setSearch] = useState<string>("");

  const loadComics = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_APIKEY
      }&hash=${import.meta.env.VITE_HASH}`
    );
    const result = await response.json();
    const comicsResults: Array<any> = result.data.results;

    const comics: Array<Comic> = [];
    comicsResults.forEach((elem) => {
      const comic: Comic = {
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
    setComicsList(comics);
  };

  useEffect(() => {
    loadComics();
  }, []);

  const onChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const onSubmitSearch = (event: any) => {
    event.preventDefault();
    const searchList: Array<Comic> = [];
    comicsList.forEach((comic) => {
      const title = comic.title.toLocaleUpperCase();
      if (title.includes(search.toLocaleUpperCase())) {
        searchList.push(comic);
      }
    });
    if (searchList.length !== 0) {
      //new list
      setComicsList(searchList);
    }
    setSearch("");
  };

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-red-600 py-5 bg-zinc-900">
        MARVEL COMICS
      </h1>
      <hr className="border-yellow-600" />
      {comicsList.length === 0 ? (
        <div className="text-xl font-bold text-center m-10 text-white">
          Loading...
        </div>
      ) : (
        <div className="flex flex-col">
          <form
            className="flex flex-row mt-8 justify-end mr-10"
            onSubmit={onSubmitSearch}
          >
            <input
              className="border-2 border-yellow-500 pl-2 "
              value={search}
              placeholder="Search a comic"
              onChange={onChangeSearch}
            />
            <button className="font-medium bg-zinc-100 ml-2 p-1 rounded-br-lg rounded-tl-lg cursor-pointer border-yellow-500 border-2 hover:bg-red-100">
              Search
            </button>
            <button
              className="font-medium bg-zinc-100 ml-2 p-1 rounded-br-lg rounded-tl-lg cursor-pointer border-yellow-500 border-2 hover:bg-red-100"
              onClick={loadComics}
            >
              Back
            </button>
          </form>
          <div className="grid grid-cols-4 gap-5 mr-8 ml-8 mt-8 mb-16 pb-16 pt-9 bg-zinc-900 shadow-2xl shadow-zinc-900">
            {comicsList.map((comic: Comic) => (
              <ComicPreview key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ComicsList;
