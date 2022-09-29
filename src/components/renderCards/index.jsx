import 'animate.css';
import { StyledButton } from "../renderHeader/style";
import {  StyledImageContainer, StyledItem, StyledTextContainer } from "./style";

export const RenderCard = ({ element, addCart }) => {
  

  return (
    <StyledItem className='animate__animated animate__zoomIn'>
      <StyledImageContainer>
        <img src={element.img} alt={element.name} />
      </StyledImageContainer>
      <StyledTextContainer>
        <h2>{element.name}</h2>
        <span>{element.category}</span>
        <p>R$ {element.price.toFixed(2).replace(".",",")}</p>
        <StyledButton id={element.id} onClick={(event) => {event.preventDefault()
          addCart(element)}}>Adicionar</StyledButton>
      </StyledTextContainer>
    </StyledItem>
  );
};
