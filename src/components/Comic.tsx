interface Comic {
  title: string;
  path: string;
  extension: string;
}


function Comic(props: Comic) {
  const imgUrl: string = `${props.path}.${props.extension}`;
  
  return (
    <div className="text-black font-medium bg-slate-100 my-2 mx-6 hover:bg-red-100 p-1.5 border-2 border-yellow-500 rounded-br-xl rounded-tl-xl cursor-pointer">
      <img className="border-2 border-yellow-500" src={imgUrl}/>
      {props.title}
    </div>
  );
}

export default Comic;
