import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #b6d8f2;
  height: 300px;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #3b444b;
`;

export const Info = styled.View`
  margin-top: 20px;
`;

export const Personal = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  padding: 0 10px;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';
`;

export const PersonalData = styled.Text`
  font-weight: normal;
  font-size: 15px;
  padding: 0 13px;
`;

export const Divider = styled.View`
  height: 1px;
  margin-left: 5px;
  margin-top: 10px;
  background-color: #333;
`;
