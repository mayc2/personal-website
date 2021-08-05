import styled from "@emotion/styled";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_FONT_COLOR, SECONDARY_BACKGROUND_COLOR, SECONDARY_FONT_COLOR } from "../constants/colors";

type SectionProps = {
    // background?: boolean;
    direction?: string;
    primary?: boolean;
}

export const Section = styled.div`
    display: flex;
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
    flex-wrap: ${(props: SectionProps) => props.direction === 'row' ? 'wrap' : ''};;
    color: ${(props: SectionProps) => props.primary ? PRIMARY_FONT_COLOR : SECONDARY_FONT_COLOR};
    flex-direction: ${(props: SectionProps) => props.direction ? props.direction : 'column'};
    background: ${(props: SectionProps) => props.primary ? PRIMARY_BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR};
`;