import "./pagecontent.css" //external styling
import xyz from "../foodie.jpg"

const PageContent = ({students})=> {
    return (
        <div className="row content">
            <div className="col">
                <h1 className="text-center">PageContent</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>Image located inisde src folder</p>
                        <img src={xyz} className="img-thumbnail"/>
                    </div>
                    <div className="col-md-6">
                        <p>Image located inisde public folder</p>
                        <img src="/b2.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div className="row"> 
                    {
                        students.map((student, index)=>{
                        return (
                            <div className="col-md-3 p-3 bg-primary">
                               <p>{student} </p> 
                            </div>
                        )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default PageContent;