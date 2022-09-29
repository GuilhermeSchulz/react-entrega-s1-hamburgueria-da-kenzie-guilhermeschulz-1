import { StyledDiv } from "./style";
import { RenderHeader } from "../renderHeader";
import { RenderMain } from "../renderMain";



export const RenderHomePage = ({ search, setSearch, products, cartItem, setCartItem }) => {
  return (
    <StyledDiv>
        <RenderHeader setSearch={setSearch} products={products}></RenderHeader>
        <RenderMain search={search} cartItem={cartItem} setCartItem={setCartItem} products={products}></RenderMain>
    </StyledDiv>
  );
};
