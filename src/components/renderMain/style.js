import styled from "styled-components";


export const StyledMain = styled.main`
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    min-height: 85%;
    height: max-content;
    justify-content: flex-start;
    @media(min-width: 1024px){
        flex-direction: row;
    }
    @media(min-width: 1500px){
        padding: 1rem 11rem;
    }
`

export const StyledList = styled.ul`
    overflow-x: auto;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    min-height: 360px;
    @media(min-width: 1024px){
        flex-wrap: wrap;
    overflow-y: auto;
    height: 60%;
    }
`
