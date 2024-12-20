import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./ui_component/Header";
import Navbar from "./ui_component/Navbar";
import PageContent from "./ui_component/PageContent";
import Students from "./ui_component/students";
import Footer from "./ui_component/Footer";
import "./main.css"

function App () {
  let amount = 2000;
  let cartCount = 2;
  let programmers = [
    {name: 'John', score:48},
    {name: 'Ola', score:30},
    {name: 'Yemi', score:45},
    {name: 'Sule', score:23},
    {name: 'Goke', score:15},
    {name: 'Yemisi', score:49}
  ]
  let students = ["Zaira","kamo","Suke","kesse"];
   return(
    //every functional component must return a  jsx
    <div className="container bg-info">
      <Header amt = {amount} cc={cartCount} />
      <Navbar xyz = {amount} cartCount={cartCount} />
      <PageContent students={students} />
      <Students />
      <Footer />

    </div>
   )
}

export default App;