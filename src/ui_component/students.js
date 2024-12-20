import React from "react";
function Students(prog){
    console.log(prog)

    return (
        <div className="row">
        <div className="col-md-8 offset-md-2">
            <table className="table table-striped">
                <thead>
                <tr>
                   <th>SN</th> 
                   <th>Name</th>
                   <th>Score</th>  
                </tr>
                </thead>
                
                <tbody>
               
                {
                     
                        prog.map(function(pr){
                            return (
                                <tr>
                                <th>1</th> 
                                <th>sule</th>
                                <th>70</th>
                            </tr>
                            )
                        })
                    }
                
                </tbody>
                
                
            </table>
        </div>
    </div>
    )
   
}
export default Students