import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = styled(LinearGradient).attrs({
  start: {x: 1, y: 0.2},
})`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
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
