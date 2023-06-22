import { useEffect, useState } from "react";

function ComicsList(){
  const [comicsList, setComicsList] = useState([]);
  
  const loadComics = async () => {
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${import.meta.env.VITE_APIKEY}&hash=${import.meta.env.VITE_HASH}`);
    const result: any = await response.json();
    const obj = result['data']['results'];    
    console.log(obj.length)
    
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
      <h1>MARVEL COMICS</h1>
      <div className="list">
        {comicsList.map((comic, index) => (
        <li key={index}>{comic['title']}</li>
        ))}
      </div>
    </>
  )
}

export default ComicsList;