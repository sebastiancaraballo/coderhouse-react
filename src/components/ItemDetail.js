import ReactMarkdown from 'react-markdown'

function ItemDetail({item}) {
  const image = require(`../assets/images/${item.pictureUrl}`);

  return (
    <div className="grid w-4/5 m-auto grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col m-auto">
        <img className="max-h-[32rem]" src={image}></img>
      </div>
      <div className="flex flex-col mt-5 md:mt-10 md:ml-24">
        <h1 className="text-2xl font-black">{item.title}</h1>
        <br></br>
        <h3 className="w-fit text-2xl">
          {`$ ${item.price}`}
        </h3>
        <div className="border-t border-gray-400 my-3"></div>
        <p className="mt-6">Product details:</p>
        <ReactMarkdown>
          {item.description}
        </ReactMarkdown>
        <br></br>
        <p className="text-sm text-highlight">{`${item.stock} units left`}</p>
      </div>
    </div>
  );
}

export default ItemDetail;
