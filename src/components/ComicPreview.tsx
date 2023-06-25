import { Link } from "react-router-dom";
import Comic from "../interfaces";

interface ComicProps {
  comic: Comic
}

function ComicPreview(props:ComicProps) {
  const imgUrl: string = `${props.comic.path}.${props.comic.extension}`;
  
  return (
    <Link state={props.comic} to={`/${props.comic.id}`}>
        <div className="text-black font-medium bg-slate-100 my-2 mx-6 hover:bg-red-100 p-1.5 border-2 border-yellow-500 rounded-br-xl rounded-tl-xl cursor-pointer">
          <img className="border-2 border-yellow-500" src={imgUrl}/>
          {props.comic.title}
        </div>
    </Link>
  );
}

export default ComicPreview;
