import { RenderCard } from "../renderCards";
import { RenderCart } from "../renderCart";
import { StyledList, StyledMain } from "./style";

export const RenderMain = ({products}) => {
  return (
    <StyledMain>
      <StyledList>
        {products.map((element) => <RenderCard key={element.id} element={element} ></RenderCard>)}
      </StyledList>
      <RenderCart products={products}></RenderCart>
    </StyledMain>
  );
};
