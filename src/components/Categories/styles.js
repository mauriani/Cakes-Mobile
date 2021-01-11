import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #432818;
  font-weight: bold;
  padding: 0 16px;
  margin-top: 10px;
`;

export const CardProduct = styled.View`
  flex-direction: column;
  background: #eee;
  height: 260px;
  width: 250px;
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

export const TitleProduct = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding: 2px;
  margin-top: 3px;
  color: #111;
`;

export const TitlePrice = styled.Text`
  font-size: 18px;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  color: #111;
`;

export const ButtonAdd = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border-width: 2px;
  border-color: #774936;
  border-radius: 10px;
  padding: 3px;
`;

export const ButtonAddText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #774936;
  margin-right: 10px;
`;
