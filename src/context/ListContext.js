import { createContext, useState,useEffect } from "react";   //hook: useState|useEffect|createContext()

const ListContext = createContext();

//a provider

const ListProvider = ({children}) =>{
    //setup the state 
    //create a function, check inside localStorage and see if there is any marketList in the local Storage, if it is not there, it will return empty array 
    function fetchListFromLocalStorage(){
        const initialList = localStorage.getItem('marketList');
        const realList = initialList ? JSON.parse(initialList) : [];
        return realList;

    }
    const [list, setList] = useState(fetchListFromLocalStorage());
    // set up all functions that the components needs

    //useEffect will help us to update Localstorage whenever a new list is created or deleted

    useEffect(function(){
        //whenever the list changes, we will update the localstorage
        localStorage.setItem("marketList", JSON.stringify(list));
    },[list])


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
        <ListContext.Provider value={ {list, addNewProduct, deleteItem}}>
            {children}
        </ListContext.Provider>
    )
}

export {ListContext, ListProvider}