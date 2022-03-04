import styled from "styled-components"

export let StyledMain = styled.div`
    background: linear-gradient(
        58deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 255, 196, 1) 0%,
        rgba(116, 255, 195, 1) 41%,
        rgba(130, 235, 255, 1) 79%
    );
    display: flex;
    padding: 5rem;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: start;
    }
    flex-grow: 1;
    justify-content: center;
    gap: 10rem;
`
