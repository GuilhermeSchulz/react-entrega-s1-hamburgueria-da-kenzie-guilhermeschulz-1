import styled from "styled-components";


export const StyledMain = styled.main`
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    min-height: 85%;
    height: max-content;
    justify-content: space-between;
`

export const StyledList = styled.ul`
    overflow-x: auto;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    min-height: 360px;
`
