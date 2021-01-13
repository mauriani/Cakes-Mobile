import React from 'react';
import {View} from 'react-native';

import {
  Container,
  ContainerImage,
  Image,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Login = () => {
  return (
    <Container>
      <Form>
        <ContainerImage>
          <Image
            source={require('../../assets/image/logo.png')}
            resizeMode="cover"
          />
        </ContainerImage>

        <Input placeholder="Usuário" placeholderTextColor="#5c3015" />
        <Input placeholder="Senha" placeholderTextColor="#5c3015" />

        <SubmitButton>
          <SubmitButtonText>ACESSAR</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
