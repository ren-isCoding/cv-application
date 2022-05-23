import styled from "styled-components"

export let StyledCvPreview = styled.div`
    position: sticky;
    top: 0rem;

    display: grid;
    grid-template-columns: 6fr 3fr;
    grid-template-rows: 14rem auto;

    width: 80rem;
    height: 110rem;

    background: #eeeeee;
    box-shadow: 0px 8px 17px 2px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12),
        0px 5px 5px -3px rgba(0, 0, 0, 0.2);

    overflow: hidden;

    @media (max-width: 800px) {
        width: 100%;
        min-width: 100%;
    }
    @media (max-width: 500px) {
        font-size: 1.2rem;
        h1 {
            font-size: 0.5rem;
        }
    }

    header {
        background: dodgerblue;
        color: whitesmoke;
        padding: 3rem;
        grid-column: 1/ -1;

        div {
            display: flex;
        }

        h1 {
            font-weight: 900;
            font-size: 4.5rem;
        }

        span {
            font-size: 2.5rem;
        }
    }

    .main-info-section {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    h3 {
        color: steelblue;
    }
    h3::after {
        content: "";
        display: flex;
        height: 0.1rem;
        width: 100%;
        background: #80808054;
        margin-bottom: 1.5rem;
    }

    section {
        margin-bottom: 2rem;
    }

    .info-desc {
        font-style: italic;
    }
    .info-wrapper {
        display: flex;
        gap: 1rem;
    }

    .info-date {
        width: 14rem;
        min-width: 11rem;
        font-weight: bold;
    }
    .info-details {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    }
    .info-bold {
        font-weight: bold;
    }

    .side-info-section {
        background: #dddddd;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .profile-img {
        max-height: 40rem;
        margin-bottom: 3rem;
    }

    .skills-list {
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
