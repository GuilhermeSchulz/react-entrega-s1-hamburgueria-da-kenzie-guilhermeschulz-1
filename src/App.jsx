import './App.css';
import { useEffect, useState } from 'react';
import { instance } from './components/axios';
import { RenderHomePage } from './components/renderHome';

function App() {
  const [products, setProducts] = useState([])


  useEffect(()=>{
    instance.get(`products`)
    .then(response => setProducts(response.data))
    .catch(err => console.log(err))
  }, [])

console.log(products)


  return (
    <>
      <RenderHomePage products={products} ></RenderHomePage>
    </>
  );
}

export default App;
