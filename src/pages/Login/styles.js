import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #bc906a;
  justify-content: center;
`;

export const Form = styled.View`
  background-color: #eee;
  border-radius: 8px;
  height: 350;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 180px;
  height: 80px;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: auto;
  border-width: 1px;
  border-color: #5c3015;
  border-radius: 5px;
  margin-top: 25px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 40px;
  margin-top: 25px;
  background-color: #5c3015;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
