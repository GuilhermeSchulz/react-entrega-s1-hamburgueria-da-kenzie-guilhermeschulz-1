import { StyledDiv } from "./style";
import { RenderHeader } from "../renderHeader";
import { RenderMain } from "../renderMain";



export const RenderHomePage = ({ products }) => {
  return (
    <StyledDiv>
        <RenderHeader></RenderHeader>
        <RenderMain products={products}></RenderMain>
    </StyledDiv>
  );
};
