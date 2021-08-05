import styled from "@emotion/styled";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_FONT_COLOR, SECONDARY_BACKGROUND_COLOR, SECONDARY_FONT_COLOR } from "../constants/colors";

type HeroProps = {
    // background?: boolean;
    direction?: string;
    primary?: boolean;
}

export const Hero = styled.div`
    display: flex;
    padding-top: 5rem;
    box-sizing: border-box;
    overflow: hidden;
    height: 100vh;
    max-width: 1920px;
    width: 100%;
    min-width: 0;
    min-height: 0;
    position: relative;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    color: ${(props: HeroProps) => props.primary ? PRIMARY_FONT_COLOR : SECONDARY_FONT_COLOR};
    flex-direction: ${(props: HeroProps) => props.direction ? props.direction : 'column'};
    background: ${(props: HeroProps) => props.primary ? PRIMARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR};
`;