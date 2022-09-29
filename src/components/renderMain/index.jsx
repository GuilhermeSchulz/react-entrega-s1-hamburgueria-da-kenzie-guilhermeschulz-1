import { RenderCard } from "../renderCards";
import { RenderCart } from "../renderCart";
import { StyledList, StyledMain } from "./style";

export const RenderMain = ({search, cartItem, setCartItem, products}) => {
  const addCart = (product) => {

    setCartItem([...cartItem, product ])
  }
  const removeCart = (product) => {
    const removeItem = cartItem.filter(element => element !== product)

    setCartItem(removeItem)
  }
  const finalPrice =  cartItem.reduce((a,b) =>  a+b.price,0)
  const treatedPrice = finalPrice.toFixed(2).replace(".",",")
  
 const removeAll = () => {
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
