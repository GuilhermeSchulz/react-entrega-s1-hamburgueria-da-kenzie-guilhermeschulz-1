import logo from "../../src/img/logo.png";
import {
  StyledButton,
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledSearch,
} from "./style";

export const RenderHeader = ({setSearch, products}) => {
  const searchResult = (event) => {
    const normalizedSearch = event.toLowerCase()
    const results = products.filter((element) =>{
      const name = element.name.toLowerCase()
      return name.includes(normalizedSearch)
    })
    event === undefined?
    setSearch(products):
    setSearch(results)
  }
  return ( 
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo Kenzie Burguer" />
        <StyledHeaderContainer>
            <StyledSearch onChange={(event) => {event.preventDefault()
              searchResult(event.target.value.trim())}} placeholder="Digite a pesquisa" type="text" />
            <StyledButton type="submit">Pesquisar</StyledButton>
        </StyledHeaderContainer>
    </StyledHeader>
  );
};


