import ItemCount from "./ItemCount";

function OnAdd() {
  alert('Do something');
}

function ItemListContainer() {
  return (
    <div className="text-center">
      <br></br>
      <ItemCount initial={1} stock={3} callback={OnAdd}/>
    </div>
  );
}

export default ItemListContainer;
