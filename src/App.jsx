import './App.css';
import { useEffect, useState } from 'react';
import { instance } from './components/axios';
import { RenderHomePage } from './components/renderHome';

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
    </>
  );
}

export default App;
