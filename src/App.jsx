import { useState } from "react"
import ListItem from "./Components/Listitem";
import NewListItemButtom from "./Components/NewListitemButton";
import ClearListButton from "./Components/ClearListButton";
import Swal from "sweetalert2";

function App() {
  const [listItems, setListItems] = useState([
    {
      id:"1",
      name:"Tortillas",
      quantity:"2",
      unit:"kg",
      checked:false
    },
    {
      id:"2",
      name:"Aceite",
      quantity:"900",
      unit:"ml",
      checked:false
    },
  ]);

  const handleNewListItemButtom = async () =>{
    const {value} = await Swal.fire({
      title:"New Item Information",
      html:`<input 
            type="text" 
            id="name" 
            name="name" 
            class="swal2-input" 
            placeholder="Item"
            />
            <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            class="swal2-input" 
            placeholder="Qty"
            />
            <input 
            type="text" 
            id="unit" 
            name="unit" 
            class="swal2-input" 
            placeholder="Unit"
            />`,
      confirmButtonText:"Add item",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Dismiss",
      preConfirm: () =>{
        const name= Swal.getPopup().querySelector('#name').value;
        const quantity= Swal.getPopup().querySelector('#quantity').value;
        const unit= Swal.getPopup().querySelector('#unit').value;

        if (!name|| !quantity || !unit) {
          Swal.showValidationMessage('Please enter the item full information');
        }
        return{name, quantity, unit}
      },
    })

    if(!value.name || !value.quantity || !value.unit) return

    setListItems([
      ...listItems,
      {id: (listItems.length + 1).toString(), ...value, checked:false},
    ]);

    console.log({value});
  }


  const handleCheckboxChange = (e) =>{
    const newList = listItems.map(item => {
      if(item.id === e.target.name){
        item.checked = !item.checked;
      }
      return item
    })
    setListItems(newList);
  };

return(
  <div className="container text-center">
    <div className="row">
      <div className="col-2"></div>
      <div className="col">
       <h1>Shopping List</h1>
      </div>
       <div className="col-2 text-end">
          <ClearListButton setListItems={setListItems}/>
          <NewListItemButtom handleButtom={handleNewListItemButtom} />
       </div>
    </div>
    <hr />
    {
      listItems.map((listItem)=>(
        <ListItem
        item={listItem}
        listItems={listItems}
        setListItems={setListItems}
        handleCheckboxChange={handleCheckboxChange}
        />
      ))
    }
    <hr />
    <div className="row">
      <div className="col text-end">
      <ClearListButton setListItems={setListItems}/>
      <NewListItemButtom handleButtom={handleNewListItemButtom} />
      </div>
    </div>
  </div>
)
}

export default App
