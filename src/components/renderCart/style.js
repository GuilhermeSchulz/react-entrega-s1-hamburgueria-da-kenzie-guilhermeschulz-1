import styled from "styled-components";


export const StyledCart = styled.div`
    min-height: 200px;
    /* padding: 1rem; */
    width: 90%;
    background-color: var(--grey-0);
    margin: 0 auto;
    max-width: 380px;
    max-height: 530px;
    margin: 0rem auto;
    margin-top: 1rem;
    height: 200px;
    @media(min-width: 1024px){
        margin-right: 1rem;
    }
    
`
export const StyledHeaderCart = styled.div`
    min-height: 15%;
    padding: 1rem;
    background-color: var(--color-primary);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3{
        color: var(--grey-0);
    }
`
export const StyledCartList = styled.ul`
    background-color: var(--grey-0);
    padding: 1rem;
    min-height: 50%;
    max-height: 150px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    li{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        
        div{
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-start;
            gap: 0.5rem;
            div{
                min-width: 40px;
                min-height: 40px;
                width: 80px;
                background-color: var(--grey-20);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--border-radius);
                img{
                width: 90%;
                }
            }
            h2{
                font-size: var(--title-size-3);
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 55%;

            }
            span{
                font-size: var(--text-size-3);
                font-weight: 400;
            }
            
        }
        button{
            background-color: transparent;
            font-size: var(--text-size-3);
            font-weight: 400;
            height: max-content;
            border: none;
            color: #bdbdbd;
            

        }
    }

`
export const StyledEmptyCart = styled.div`
    background-color: var(--grey-0);
    height: 200px;
    padding: 1rem;
    min-height: 20%;
    max-height: 150px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    h2{
        font-size: var(--title-size-3);
        color: var(--grey-100);
        font-weight: 700;
    }
    p{
        font-weight: 600;
            font-size: var(--title-size-4);
            color: var(--grey-100);
    }
`
export const StyledTotalCart = styled.div`
    min-height: 5%;
    height: 100px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    background-color: var(--grey-0);
    border-top: 2px solid var(--grey-20);
    div{
        display:flex;
        justify-content: space-between;
        h3{
            font-weight: 600;
            font-size: var(--title-size-4);
            color: var(--grey-100);
        }
        p{
            font-weight: 600;
            font-size: var(--title-size-4);
            color: var(--grey-50);
        }
}
    
    button{
        width: 100%;
        border: 1px solid transparent;
        color: var(--grey-100);
        background: var(--grey-20);
        padding: 1rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        font-size: var(--text-size-1);
        transition: .5s;
        :hover{
                background-color: var(--grey-50);

            }
    }
`