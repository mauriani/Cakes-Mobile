import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const CardProduct = styled.View`
  background: #eee;
  height: 250px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const Image = styled.Image`
  height: 140px;
  border-radius: 3px;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const TitleProduct = styled.Text`
  flex: 1;
  margin-top: 3px;
  color: #111;
`;

export const TitlePrice = styled.Text`
  flex: 1;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  color: #111;
`;

export const ButtonAdd = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
  flex-direction: row;
  background-color: #7159c1;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonAddText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
`;
