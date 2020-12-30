import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background-color: #190f17;
`;

export const Header = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  background: #d1a89f;
  height: 150px;
  border-radius: 15px;
`;

export const Image = styled.Image`
  height: 120px;
  width: 280px;
`;

export const Card = styled.View`
  flex-direction: column;
  height: 200px;
  width: 200px;
  margin-top: 20px;
  border-radius: 20px;
  background: #fff;
  margin-left: 10px;
`;

export const Img = styled.Image`
  height: 100px;
  margin-top: 5px;
`;
export const Info = styled.View``;
export const TitleProduct = styled.Text``;
