import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Input from './components/Input';
import Lists from './components/Lists';
import HomePage from './components/HomePage';


import { BrowserRouter, Switch,Routes , Route,Link } from 'react-router-dom';

function App() {
  const [product, setProduct] = React.useState([]);

  const deleteProduct = (item) => {
    //console.log("I am removing" + item)
    setProduct(product.filter((e) => {
      return (
        e !== item
      )
    }))
  }

  return (
    <>
      <BrowserRouter>
        <Navbar product={product} />
        <Routes>
          <Route exact path="/input" element={<Input setProduct={setProduct} product={product} />}>
            
          </Route>
          <Route exact path="/lists" element={<Lists product={product} deleteProduct={deleteProduct} />}>
            
          </Route>
          <Route exact path="/" element={<HomePage />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
