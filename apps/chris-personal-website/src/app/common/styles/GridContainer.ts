import styled from '@emotion/styled';

interface GridContainerProps {
  columns?: number;
  margin?: string;
}

export const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-left: ${(props: GridContainerProps) =>
    props.margin ? props.margin : '10rem'};
  margin-right: ${(props: GridContainerProps) =>
    props.margin ? props.margin : '10rem'};
  max-width: 1500px;

  grid-template-columns: ${(props: GridContainerProps) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : 'repeat(4, 1fr)'};
  grid-auto-rows: 300px;

  @media screen and (max-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props: GridContainerProps) =>
      props.columns ? `repeat(${props.columns / 2}, 1fr)` : 'repeat(2, 1fr)'};
    grid-auto-rows: 200px;
  }
`;
