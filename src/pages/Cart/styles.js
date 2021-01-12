import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Products = styled.View``;

export const ContainerProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #eee;
  margin-top: 20px;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Image = styled.Image`
  width: 140px;
  height: 120px;
  border-radius: 5px;
`;

export const DetailsProduct = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const TitleProduct = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const ValueProduct = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const SubTotal = styled.Text`
  font-size: 12px;
  color: #999;
  margin-left: 5px;
`;

export const SubTotalPriceBold = styled.Text`
  font-weight: bold;
  color: #111;
  font-size: 17px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
`;

export const Input = styled.TextInput`
  border: 1px solid #111;
  border-radius: 4px;
  color: #666;
  padding: 6px;
  height: 40px;
  width: 50px;
`;

export const ButtonSub = styled.TouchableOpacity`
  border: 0;
  padding: 6px;
`;

export const DetailsAddRemove = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ButtonRemove = styled.TouchableOpacity`
  height: auto;
  width: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #e6ccb2;
`;

export const Total = styled.Text`
  font-size: 12px;
  color: #333;
  margin-left: 5px;
  padding: 0 16px;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: #111;
  font-size: 17px;
`;

export const ButtonFinalizar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: #9c6644;
`;

export const ButtonFinalizarText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContainerCart = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #eee;
  margin-top: 20px;
  padding: 5px;
  height: 130px;
  margin-left: 10px;
  margin-right: 10px;

  border-radius: 8px;
`;

export const ContainerCartTitulo = styled.Text`
  font-weight: bold;
  color: #111;
  font-size: 18px;
  margin-bottom: 10px;
`;
