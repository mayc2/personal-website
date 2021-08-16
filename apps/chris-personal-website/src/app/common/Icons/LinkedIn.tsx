import styled from '@emotion/styled';
import { Linkedin } from 'grommet-icons';
import { WithTitle } from '../components/WithTitle';
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
  return (
    <WithTitle title='Link to LinkedIn Profile'>
      <LinkedinWrapper a11yTitle='LinkedIn' color='plain' />
    </WithTitle>
  );
};
