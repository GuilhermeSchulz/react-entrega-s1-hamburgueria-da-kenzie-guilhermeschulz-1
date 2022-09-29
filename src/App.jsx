import './App.css';
import { useEffect, useState } from 'react';
import { instance } from './components/axios';
import { RenderHomePage } from './components/renderHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState([])
  const [cartItem, setCartItem] = useState([])

  useEffect(()=>{
    instance.get(`products`)
    .then(response => {
      setProducts(response.data)
      setSearch(response.data)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <>
      <RenderHomePage search={search} setSearch={setSearch} products={products} cartItem={cartItem} setCartItem={setCartItem}></RenderHomePage>
      <ToastContainer />
    </>
  );
}

export default App;
