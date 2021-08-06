import styled from "@emotion/styled";
import { Home } from "grommet-icons";
import { EMPHASIS_FONT_COLOR, SECONDARY_SELECTION_COLOR } from "../constants/colors";
import { Link } from 'react-router-dom';
import { animateScroll } from "react-scroll";

const HomeWrapper = styled(Home)`
  &:hover {
    transition: all 0.2s ease-in-out;
    fill: ${SECONDARY_SELECTION_COLOR};
    stroke: ${SECONDARY_SELECTION_COLOR};
  }
`;

export const HomeIcon = () => { 
    return (
        <Link to="/">
          <HomeWrapper
            onClick={animateScroll.scrollToTop}
            cursor="pointer"
            a11yTitle="Home"
            color={EMPHASIS_FONT_COLOR}
            size="large"
          />
      </Link>
    );
};