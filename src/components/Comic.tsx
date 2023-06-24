interface Comic {
  title: string;
}

function Comic(props: Comic) {
  return (
    <div className="text-black font-medium bg-slate-100 my-2 mx-6 hover:bg-red-100 p-1.5 border-2 border-yellow-600 rounded-br-lg rounded-tl-lg cursor-pointer">
      {props.title}
    </div>
  );
}

export default Comic;
