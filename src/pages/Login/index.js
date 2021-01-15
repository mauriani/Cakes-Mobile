import React, {Component} from 'react';
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

export default class Perdil extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSbmit = () => {
    const {email, password} = this.state;

    // SAGA DEPOIS
  };

  render() {
    const {navigate} = this.props.navigation;

    const {email, password} = this.state;

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
            onChangeText={(email) => this.setState({email: email})}
            placeholderTextColor="#5c3015"
            keyboardType="email-address"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            value={email}
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.focus()}
          />
          <Input
            placeholder="Senha"
            placeholderTextColor="#5c3015"
            secureTextEntry={true}
            value={password}
            autoCorrect={false}
            returnKeyType="send"
            ref={(el) => (passwordInput = el)}
            onChangeText={(password) => this.setState({password: password})}
          />

          <SubmitButton onPress={() => navigate('Home')}>
            <SubmitButtonText>ACESSAR</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
