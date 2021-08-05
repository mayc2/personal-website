import { css, Global } from '@emotion/react';
import { PRIMARY_BACKGROUND_COLOR } from '../constants/colors';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};
