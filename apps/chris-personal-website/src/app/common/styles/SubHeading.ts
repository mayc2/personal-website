import styled from '@emotion/styled';
import { PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from '../constants/colors';

type SubHeadingProps = {
  primary?: boolean;
};

export const SubHeading = styled.h2`
  font-size: 2rem;
  padding-bottom: 3rem;
  text-align: center;
  // margin: 50px;
  color: ${(props: SubHeadingProps) =>
    props.primary ? PRIMARY_FONT_COLOR : SECONDARY_FONT_COLOR};
    
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
