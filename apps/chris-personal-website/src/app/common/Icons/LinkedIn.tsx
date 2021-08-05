import styled from '@emotion/styled';
import { Linkedin } from 'grommet-icons';
import {
  PRIMARY_FONT_COLOR,
  PRIMARY_LINKEDIN_COLOR,
  SECONDARY_LINKEDIN_COLOR,
} from '../constants/colors';

const LinkedinWrapper = styled(Linkedin)`
  background: ${PRIMARY_FONT_COLOR};
  border-radius: 5px;

  &:hover {
    fill: ${SECONDARY_LINKEDIN_COLOR};
    stroke: ${SECONDARY_LINKEDIN_COLOR};
  }
`;

export const LinkedIn = () => {
  return <LinkedinWrapper a11yTitle="LinkedIn" color={PRIMARY_LINKEDIN_COLOR}/>;
};
