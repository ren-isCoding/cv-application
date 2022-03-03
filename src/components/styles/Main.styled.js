import styled from "styled-components"

export let StyledMain = styled.div`
    background: #cccccc;
    display: flex;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    flex-grow: 1;
    justify-content: center;
    gap: 10rem;
`
