//inline styling
const Header = (props)=> {
    console.log(props)
    return (
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={{ color:'gold',backgroundColor:'green', minHeight:'10vh'}}>Header</h1>
                <p className="text-center"> Total Amount: {props.amt} </p>
            </div>
        </div>
    )
}

export default Header;