function Item({id, title, description, price, pictureUrl, stock}) {
  const image = require(`../assets/images/${pictureUrl}`);

  return (
    <div className="w-64 h-96 shadow-xl bg-white">
      <img src={image} className="h-64 m-auto"></img>
      <br></br>
      <h1 className="text-xl">{title}</h1>
      <h3>{`$ ${price}`}</h3>
      <br></br>
      <p className="text-sm text-gray-400">{`${stock} units left`}</p>
    </div>
  );
}

export default Item;
