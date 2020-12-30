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
  background: #ccc;
  height: 150px;
  border-radius: 15px;
`;

export const Image = styled.Image`
  height: 120px;
  width: 280px;
`;
