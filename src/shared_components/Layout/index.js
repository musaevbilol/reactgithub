import Navbarmenu from "./Navbarmenu";
import Footer from "./footer";
import Home from "../../pages/home";


function Layout(props) {
    return ( 
        <div className="flex flex-col min-h-screen">
          <Navbarmenu/>
    
         <div className="flex-1">
         <h1>{props.children}</h1>
         </div>
       <Footer/>
      </div>
     );
}

export default Layout;