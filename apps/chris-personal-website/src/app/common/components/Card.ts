import styled from '@emotion/styled';
import {
  PRIMARY_FONT_COLOR,
  PRIMARY_SELECTION_COLOR,
  SECONDARY_FONT_COLOR,
  UNSELECTED_COLOR,
} from '../constants/colors';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};
  background: ${UNSELECTED_COLOR};
  font-size: 2.5rem;
  border-radius: 4px;
  transition: all 500ms;
  padding: 10px;

  &:hover {
    background: ${PRIMARY_SELECTION_COLOR};
    color: ${PRIMARY_FONT_COLOR};
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
