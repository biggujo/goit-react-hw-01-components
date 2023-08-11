import styled from 'styled-components';

export const Card = styled.section`
  width: 450px;

  box-shadow: ${props => props.theme.shadow.primary};

  border-radius: 10px;
  border: 1px solid #d3d3d3;

  overflow: hidden;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  text-transform: uppercase;

  background-color: #ffffff;
`;
