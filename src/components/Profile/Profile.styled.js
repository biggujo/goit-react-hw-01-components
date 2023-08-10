import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;

  box-shadow: ${props => props.theme.shadow.primary};

  border-radius: 10px;
  border: 1px solid #d3d3d3;

  overflow: hidden;
`;
