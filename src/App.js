import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Components/Home';
import { Shop } from './Components/Shop';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Copyright } from './Components/Copyright';
import {Contact} from './Components/Contact'
import { Products } from './Components/Shop/Products';
import { useEffect, useState } from 'react';



function App() {

  let spath = JSON.parse(localStorage.getItem('urlpath'))
  const [path, setPath] = useState({path: spath.path, text: spath.text});

  const [isloading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   console.log("app js" + isloading)
  // }, [isloading])

debugger;
  return (

    <Router>
      <>

    <Header></Header>
      <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/shop" element={<Shop isloading={isloading} setIsLoading={setIsLoading} setPath={setPath} />}  >
       <Route exact path={path.path} element={<Products  text={path.text} />} />
       </Route>
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
      
    <Footer></Footer>
    <Copyright></Copyright>
    </>
    </Router>
   
  );
}

export default App;
