import React,{useState} from "react";

function Item({ name, category }) {
  const MyComponents = () => {
    const [items,setItem]=useState("");
  }
  //const btnMsg =function(){
   // if(item==="in-cart"){
     // return "Remove from cat"
    //}else{
      //return "Add to cart"
    //}
  //}
  return (
    <li className={"item"}>
      <span>{name}</span>
      <span className="category">{category}</span>
     

      <button className="add" onClick={()=>setItem ("in-cart")}>{Item ? "Remove from cart": "Add to cart"}</button>
    </li>
  );
}

export default Item;
