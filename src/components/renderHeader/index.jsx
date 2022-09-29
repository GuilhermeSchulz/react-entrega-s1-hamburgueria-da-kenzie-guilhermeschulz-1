import logo from "../../src/img/logo.png";
import {
  StyledButton,
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledSearch,
} from "./style";

export const RenderHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo Kenzie Burguer" />
        <StyledHeaderContainer>
            <StyledSearch placeholder="Digite a pesquisa" type="text" />
            <StyledButton type="submit">Pesquisar</StyledButton>
        </StyledHeaderContainer>
    </StyledHeader>
  );
};
