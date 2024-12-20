import { useEffect, useState } from "react"
import Banner from "./recipe_components/Banner"
import Copyright from "./recipe_components/Copyright"
import Footer from "./recipe_components/Footer"
import List from "./recipe_components/List"
import Nav from "./recipe_components/Nav"
import Loader from "./recipe_components/Loader"

const Recipe = () => {
    //three states to track what is going on:
    const[categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //a state to store what filter with
    const [f, setF] = useState("");

    //filter category
    const filterCategory = () => {
        const filterd = categories.filter(function(cat){
            return cat.strCategory.toLowerCase().includes(f.toLowerCase())
        })
        return filterd;
    }

    // hook: useEffect | useState
    const requestMaker = ()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(fakeresp){
            return fakeresp.json()
        })
         .then(function(data){
           setCategories(data.categories)
           setLoading(false)
        })
         .catch(function(err){ 
            setCategories([])
            setLoading(false)
            setError(err)
        })
    }
    useEffect(function(){
        requestMaker();
    }, [])

            //conditional rendering
    if(loading === true){
        return (
            <Loader />
        )

    }

  return (
    <div className="container-fluid">
        <Nav />
        <Banner setF={setF} />
        <List categories={filterCategory()} />
        <Footer />
        <Copyright />
    </div>
  )
}

export default Recipe