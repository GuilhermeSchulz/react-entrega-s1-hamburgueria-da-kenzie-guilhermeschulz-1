
import { StyledButton } from "../renderHeader/style";
import {  StyledImageContainer, StyledItem, StyledTextContainer } from "./style";

export const RenderCard = ({ element }) => {
  return (
    <StyledItem>
      <StyledImageContainer>
        <img src={element.img} alt={element.name} />
      </StyledImageContainer>
      <StyledTextContainer>
        <h2>{element.name}</h2>
        <span>{element.category}</span>
        <p>R$ {element.price}</p>
        <StyledButton id={element.id}>Adicionar</StyledButton>
      </StyledTextContainer>
    </StyledItem>
  );
};
