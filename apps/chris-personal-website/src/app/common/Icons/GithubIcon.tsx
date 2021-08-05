import styled from '@emotion/styled';
import { Github } from 'grommet-icons';
import { SECONDARY_FONT_COLOR, PRIMARY_FONT_COLOR } from '../constants/colors';

const GithubIconWrapper = styled(Github)`
  &:hover {
    fill: ${PRIMARY_FONT_COLOR};
    stroke: ${PRIMARY_FONT_COLOR};
  }
`;

export const GithubIcon = () => {
  return <GithubIconWrapper a11yTitle="Github" color={SECONDARY_FONT_COLOR} />;
};
