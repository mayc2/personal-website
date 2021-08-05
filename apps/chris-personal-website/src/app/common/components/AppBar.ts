import { PRIMARY_BACKGROUND_COLOR } from '../constants/colors';
import styled from '@emotion/styled';

export const AppBar = styled.nav`
  align-items: center;
  display: flex;
  max-width: 100%;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: space-between;
  background: ${PRIMARY_BACKGROUND_COLOR};
  z-index: 999;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  position: sticky;
  top: 0;
  height: 3rem;
  margin-top: -3rem;
`;
