import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 300px;

  border: 1px solid #d3d3d3;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-bottom: 15px;

  box-shadow: ${props => props.theme.shadow.primary};

  border-radius: 50%;
`;

export const Title = styled.p`
  margin-bottom: 5px;

  font-size: 20px;
  font-weight: 700;
`;

export const Text = styled.p`
  color: gray;
`;
