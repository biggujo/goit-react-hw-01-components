import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-block: 20px;
  padding-inline: 15px;

  background-color: #ffffff;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadow.primary};
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;

  background-color: ${({ isOnline }) => isOnline ? 'green' : 'red'};

  border-radius: 50%;
`;

export const Avatar = styled.img`
  border: 1px solid #d3d3d3;
  border-radius: 7px;
  height: 100%;
  padding: 2px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
