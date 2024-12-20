//internal styling 

const Navbar = ({xyz, cartCount})=> {
    //xyz=1000; props are immutable
    const styleH1 = {
        color:'yellow',
        backgroundColor:'brown',
        paddingTop:'20px',
        minHeight:'10vh'
    }
    return (
        <div className="row">
            <div className="col">
                <h1 className="text-center" style={styleH1}>Navbar</h1>
                <p className="text-center">Total: {xyz} </p>
                <p className="text-center">Number of cart Element: {cartCount}</p>
            </div>
        </div>
    )
}

export default Navbar;