import styled from "@emotion/styled";


export const GridContainer = styled.div`
    display: grid;
    gap: 1rem;
    padding: 10rem;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 300px;
`