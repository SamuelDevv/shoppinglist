import { useContext } from "react"
import { ListContext } from "../context/ListContext"

const Header = () => {
    // useContext
       const{list}  =useContext(ListContext)
       const lists = list
    return (
        <div className="row py-5">
            <div className="col-md-8 offset-md-2">
                <h1 className="text-center">Lister</h1>
                <p className="text-center">Number of Items in shopping List: <strong> {lists.length} </strong> </p>
            </div>
        </div>
    )
}
export default Header