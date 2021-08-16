import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Home } from 'grommet-icons';
import {
  EMPHASIS_FONT_COLOR,
  SECONDARY_SELECTION_COLOR,
} from '../constants/colors';
import { WithTitle } from './WithTitle';

const HomeWrapper = styled(Home)`
  &:hover {
    transition: all 0.2s ease-in-out;
    fill: ${SECONDARY_SELECTION_COLOR};
    stroke: ${SECONDARY_SELECTION_COLOR};
  }
`;

export const HomeIcon = () => {
  return (
    <Link to='/'>
      <WithTitle title='Go to Home'>
        <HomeWrapper
          onClick={animateScroll.scrollToTop}
          cursor='pointer'
          a11yTitle='Home'
          color={EMPHASIS_FONT_COLOR}
          size='large'
        />
      </WithTitle>
    </Link>
  );
};
