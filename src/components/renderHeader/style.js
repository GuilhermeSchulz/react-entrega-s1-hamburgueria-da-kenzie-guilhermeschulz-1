import styled from "styled-components";

export const StyledHeader = styled.header`
    /* height: 10%; */
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    min-height: 100px;
    margin-bottom: 2rem;
    @media(min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 11rem;
        min-height: 50px;
    }
`
export const StyledLogo = styled.img`
    width: 50%;
    max-width: 150px;
    min-width: 100px;
    @media(min-width: 1024px){
    }
`
export const StyledHeaderContainer = styled.div`
    display: flex;

    background-color: white;

    align-items: center;
    width: 100%;
    padding: 0 0.2rem;
    max-height: 300px;
    max-width: 300px;
    background-color: white;
    border-radius: var(--border-radius);
    border: 1px solid var(--grey-20);

    @media(min-width: 1024px){
        max-width: 365px;
    }

`
export const StyledSearch = styled.input`
    padding: 0.5rem;
    height: 30px;
    border-radius: var(--border-radius);
    border: none;
    outline: none;
    width: 90%;
    margin: 0 auto;
    max-width: 300px;
    background-color: white;
    ::placeholder{
        color: var(--grey-20);
    }
    :focus{

    }
    @media(min-width: 768px){
    }
`
export const StyledButton = styled.button`
    padding: 0.2rem;
    height: 39px;
    width: 35%;
    background-color: var(--color-primary);
    border-radius: var(--border-radius);
    border: none;
    color: var(--grey-0);
    cursor: pointer;
    font-weight: 600;
    font-size: var(--title-size-4);
    max-width: 100px;
    :hover{
        background-color: var(--color-primary-50);
    }
`