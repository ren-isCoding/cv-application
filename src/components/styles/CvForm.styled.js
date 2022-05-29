import styled from "styled-components"

export let StyledCvCreator = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 60rem;
    min-width: 40rem;
    @media (max-width: 800px) {
        width: 100%;
    }
    background: #eeeeee;
    padding: 3rem;
    border-radius: 5px;
    box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12),
        0px 5px 5px -3px rgba(0, 0, 0, 0.2);

    h3 {
        margin-bottom: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        height: 3.5rem;
        border-radius: 5px;
        padding: 0 1rem;
    }

    input[type="file"] {
        display: none;
    }

    label {
        text-align: center;
        cursor: pointer;
    }

    label:hover {
        color: rgb(101, 210, 223);
    }

    label,
    button {
        width: 100%;
        height: 3rem;
        border-radius: 5px;
        background-color: #333333;
        color: whitesmoke;
        font-weight: bold;
        transition: 100ms ease-in-out;
    }

    .remove-btn:hover {
        color: rgb(218, 39, 39);
    }

    .add-btn:hover {
        color: rgb(0, 190, 0);
    }
`
