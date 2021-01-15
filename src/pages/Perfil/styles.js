import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const User = styled.View``;

export const Avatar = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #b6d8f2;
  height: 300px;
`;

export const Name = styled.Text`
  font-size: 25px;
  color: #3b444b;
  font-family: 'Ubuntu-Regular';
`;

export const Info = styled.View`
  margin-top: 20px;
`;

export const Personal = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  padding: 0 10px;
  font-size: 20px;
  font-family: 'Ubuntu-Bold';
  margin-bottom: 15px;
`;

export const PersonalDataBold = styled.Text`
  font-weight: normal;
  font-size: 15px;
  padding: 0 13px;
  font-family: 'Roboto-Bold';
`;

export const PersonalData = styled.Text`
  font-weight: normal;
  font-size: 15px;
  padding: 0 20px;
  font-family: 'Roboto-Medium';
`;

export const Divider = styled.View`
  height: 1px;
  margin-left: 5px;
  margin-top: 10px;
  background-color: #333;
`;

export const DividerList = styled.View`
  margin-top: 8px;
  left: 5px;
  height: 1.2px;
  background-color: #969696;
`;
