import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${20 + getStatusBarHeight(true)}px;
  background-color: #f4cfdf;
  padding: 0 12px;
`;

export const Image = styled.Image`
  width: 230px;
  height: 80px;
  margin-top: 20px;
`;

export const Cart = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Itens = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #bb9457;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
