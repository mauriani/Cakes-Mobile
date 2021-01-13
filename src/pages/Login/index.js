import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as LoginActions from '../../store/modules/Login/actions';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function signIn(username, password) {
    dispatch(LoginActions.loginRequest(username, password));
  }
  console.log(username, password);
  return (
    <Container>
      <Form>
        <ContainerImage>
          <Image
            source={require('../../assets/image/logo.png')}
            resizeMode="cover"
          />
        </ContainerImage>

        <Input
          placeholder="Usuário"
          placeholderTextColor="#5c3015"
          autoCorrect={false}
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#5c3015"
          secureTextEntry={true}
          value={password}
          autoCorrect={false}
          onChangeText={(password) => setPassword(password)}
        />

        <SubmitButton onPress={() => signIn(username, password)}>
          <SubmitButtonText>ACESSAR</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
