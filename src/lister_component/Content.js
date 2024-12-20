import React from "react"

const Content = ({lists, deleteItem}) => {

  return (
    <>
        <div className="row">
            <div className="col">
                <h2 className="text-center text-primary">Shopping List Items</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map(function(list, index){
                                return(
                                    <tr key={list.id}>
                                        <td>{index +1}</td>
                                        <td>{list.name}</td>
                                        <td>{list.price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={function(){deleteItem(list)}}>Delete Product</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </>
  )
}

export default Content