import { toast } from "react-toastify";
import { RenderCard } from "../renderCards";
import { RenderCart } from "../renderCart";
import { StyledList, StyledMain } from "./style";

export const RenderMain = ({search, cartItem, setCartItem, products}) => {
  const addedToCart = () => toast.success("Produto Adicionado");
  const removedFromCart = () => toast.warn("Produto Removido");
  const allRemovedFromCart = () => toast.warn("Todos produtos Removidos");
  const itemOnCart = () => toast.error("Item já está no carrinho, adicionado mais uma quantidade");

  const newCartItem = (item) =>{
    addedToCart()
    setCartItem([...cartItem, {...item, count: 1}])
  }
  const alreadyOnCart = (item) => {
    itemOnCart()
    const teste = cartItem.map(element => {
      if(element.id === item.id){
        element.count+=1
        return element
      }else
      return element
    })
    setCartItem(teste)
  }
  const addCart = (product) => {
    cartItem.some(element => element.id === product.id)?
    alreadyOnCart(product)
    :
    newCartItem(product)
  }

  const removeCart = (product) => {

    


    const cart = cartItem.map(element => {
      if(element.id === product.id){
        element.count-=1
        return element}
        else{
          return element
    }})

    const filteredCart = cart.filter(element => element.count > 0)

    removedFromCart()
    setCartItem(filteredCart)
}
  const finalPrice =  cartItem.reduce((a,b) =>  a+b.price*b.count,0)
  const treatedPrice = finalPrice.toFixed(2).replace(".",",")
  
 const removeAll = () => {
  allRemovedFromCart()
  setCartItem([])
 }
  return (
    <StyledMain>
      <StyledList>
        {search.map((element) => <RenderCard key={element.id} element={element} addCart={addCart}></RenderCard>)}
      </StyledList>
      <RenderCart cartItem={cartItem} removeCart={removeCart} treatedPrice={treatedPrice} removeAll={removeAll}></RenderCart>
    </StyledMain>
  );
};
