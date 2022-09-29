import { StyledCart, StyledCartList, StyledHeaderCart, StyledTotalCart } from "./style";

export const RenderCart = ({products}) => {
  return (
    <StyledCart>
      <StyledHeaderCart>
        <h3>Carrinho de compras</h3>
      </StyledHeaderCart>
      <StyledCartList>
        {
            products.map((element) => {
                return(
                    <li key={element.id}>
                        <div>
                            <div><img src={element.img} alt={element.name} /></div>
                            <h2>{element.name}</h2>
                            <span>{element.category}</span>
                        </div>
                        <button>Remover</button>
                        {/* <span>1 un.</span> */}
                    </li>
                )
            })
        }

      </StyledCartList>
      <StyledTotalCart>
        <div>
          <h3>Total:</h3>
          <p>R$ 40,00</p>
        </div>
        <button>Remover todos</button>
      </StyledTotalCart>
    </StyledCart>
  );
};
