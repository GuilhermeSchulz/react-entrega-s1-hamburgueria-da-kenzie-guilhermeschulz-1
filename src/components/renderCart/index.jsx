import { StyledCart, StyledCartList, StyledEmptyCart, StyledHeaderCart, StyledTotalCart } from "./style";

export const RenderCart = ({treatedPrice, cartItem, removeCart, removeAll}) => {
  console.log(cartItem)
  return (
    <StyledCart>
      <StyledHeaderCart>
        <h3>Carrinho de compras</h3>
      </StyledHeaderCart>
      <StyledCartList>
        {cartItem.length > 0?
            cartItem.map((element) => {
                return(
                  
                    <li key={element.id}>
                        <div>
                            <div><img src={element.img} alt={element.name} /></div>
                            <h2>{element.name}</h2>
                            <span>{element.category}</span>
                        </div>
                        <button onClick={() => removeCart(element)}>Remover</button>
                        {/* <span>1 un.</span> */}
                    </li>
               
                )
            }):
            (<StyledEmptyCart>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </StyledEmptyCart>)
        }
   </StyledCartList>
      
      {cartItem.length > 0 ?
    (    <StyledTotalCart>
          <div>
            <h3>Total:</h3>
            <p>R$ {treatedPrice}</p>
          </div>
          <button onClick={removeAll}>Remover todos</button>
        </StyledTotalCart>
      ):
     ( <></>)}
     </StyledCart>
  );
};
