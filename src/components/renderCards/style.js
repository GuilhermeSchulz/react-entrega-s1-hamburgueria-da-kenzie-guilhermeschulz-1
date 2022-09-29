import styled from "styled-components";
export const StyledItem = styled.li`
    height: 350px;
    border: 2px solid var(--grey-20);
    border-radius: var(--border-radius);
    min-width: 300px;

`
export const StyledImageContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    background-color: var(--grey-0);
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
`
export const StyledTextContainer = styled.div`
    width: 100%;
    height: 40%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2{
        font-size: var(--title-size-3);
        color: var(--grey-100);
        font-weight: 700;
    }
    span{
        font-size: var(--text-size-3);
        color: var(--grey-50);
    }
    p{
        font-size: var(--text-size-2);
        font-weight: 600;
        color: var(--color-primary);
    }
`
