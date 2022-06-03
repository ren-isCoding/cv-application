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
        height: 3rem;
        border-radius: 5px;
        padding: 0 1rem;
    }

    input[type="file"] {
        display: none;
    }

    label {
        text-align: center;
        cursor: pointer;

        &:hover {
            color: rgb(101, 210, 223);
        }
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

    .skills-form {
        display: flex;
        gap: 1rem;
        align-content: center;
    }

    .skills-form input {
        width: 100%;
    }

    .add-skill-btn {
        width: 15rem;

        &:hover {
            color: rgb(0, 190, 0);
        }
        @media (max-width: 600px) {
            font-size: 3vw;
        }
    }

    .skill-li {
        &:first-of-type {
            margin-top: 2rem;
        }
        margin-left: 1.5rem;
        margin-bottom: 1rem;
        position: relative;
    }

    .skill-li button {
        position: absolute;
        right: 0;
        width: 3rem;
        background: none;
        color: #333333;

        &:hover {
            color: red;
        }
    }

    .other-options {
        display: flex;
        gap: 1rem;
        @media (max-width: 600px) {
            font-size: 3vw;
        }
    }

    .create-pdf-btn:hover {
        color: rgb(0, 190, 0);
    }

    .load-example-btn:hover {
        color: rgb(101, 210, 223);
    }

    .reset-btn:hover {
        color: red;
    }
`
