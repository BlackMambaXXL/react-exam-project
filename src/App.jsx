import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Item from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Basket from './components/Basket/Basket';
import { useState } from 'react';

function App() {
  const [activeModal, setActive] = useState(false)
  const [basket, setBasket] = useState([])

  return (
      <BrowserRouter>
        <div className="App">
          <Basket activeModal={activeModal} setActive={setActive} basket={basket} setBasket={setBasket}/>
          <Header setActive={setActive} />
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />} setBasket={setBasket}/>
                <Route path="/item/:id" element={<Item setBasket={setBasket} basket={basket}/> }/>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
