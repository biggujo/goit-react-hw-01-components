import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 300px;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-bottom: 15px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

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
