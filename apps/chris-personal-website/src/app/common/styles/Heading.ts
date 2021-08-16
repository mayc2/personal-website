import styled from '@emotion/styled';
import { PRIMARY_FONT_COLOR, SECONDARY_FONT_COLOR } from '../constants/colors';

type HeadingProps = {
  primary?: boolean;
  margin?: string;
  paddingBottom?: string;
};

export const Heading = styled.h1`
  font-size: 3rem;
  padding-bottom: ${(props: HeadingProps) =>
    props.paddingBottom ? props.paddingBottom : '3rem'};
  margin: ${(props: HeadingProps) => (props.margin ? props.margin : '50px')};
  text-align: center;
  color: ${(props: HeadingProps) =>
    props.primary ? PRIMARY_FONT_COLOR : SECONDARY_FONT_COLOR};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 20px;
  }
`;
