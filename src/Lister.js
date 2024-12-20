
import Header from './lister_component/Header'
import AddItem from './lister_component/AddItem'
import Content from './lister_component/Content'
import Footer from './ui_component/Footer'
import  { useState } from 'react'

const Lister = () => {
    
    const initialList = [
        {name: "1liter greek yogurt parfait", price:"250000", id:100},
        {name: "Iphone 16", price:"4500000",id:200},
        {name: "Mac Laptop", price:"5500000",id:300},
        {name: "Ford", price:"550000000",id:400}

    ];
    const [list, setList] = useState(initialList);
    //this function recieves product and add it to it list
    function addNewProduct(product){
      setList([product, ...list]);
    }

    //function that accept id of product to delete abd then delete
    function deleteItem(id){
      //filter the current stater and filter out product that has the id that was passed
      const filteredProduct = list.filter(function(li){
        return li.id !== id;
      })
      setList(filteredProduct)
    }
  return (
    <div className='container'>
        <Header lists={list}/>
        <AddItem addNewProduct={addNewProduct}/>
        <Content lists={list} deleteItem={deleteItem}/>
        <Footer />
    </div>
  )
}

export default Lister