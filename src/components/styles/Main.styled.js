import styled from "styled-components"

export let StyledMain = styled.div`
  height: 100%;
  background: linear-gradient(
    58deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 255, 196, 1) 0%,
    rgba(116, 255, 195, 1) 41%,
    rgba(130, 235, 255, 1) 79%
  );
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 5rem;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  @media (max-width: 800px) {
    padding: 0;
    gap: 0;
  }
`
