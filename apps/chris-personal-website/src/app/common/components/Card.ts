import styled from "@emotion/styled";
import { PRIMARY_FONT_COLOR, PRIMARY_SELECTION_COLOR, UNSELECTED_COLOR } from "../constants/colors";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${PRIMARY_FONT_COLOR};
    background: ${UNSELECTED_COLOR};
    font-size: 3rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;

    &:hover {
        background: ${PRIMARY_SELECTION_COLOR};
    }
`