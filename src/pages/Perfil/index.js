import {set} from 'immer/dist/internal';
import React, {Component} from 'react';
import AvatarSocial from 'react-native-avatar-social';

import {
  Container,
  Avatar,
  Name,
  Info,
  Personal,
  Title,
  PersonalData,
  PersonalDataBold,
} from './styles';

export default class Perdil extends Component {
  state = {
    users: [],
  };

  loadingUser = async () => {
    const response = await api.get('/user');
    this.setState({
      users: response,
    });
  };

  render() {
    const {user} = this.state;
    console.log(users);
    return (
      <Container>
        <Avatar>
          <AvatarSocial
            dim={150}
            image={{
              uri:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg',
            }}
            name="Connie Nielsen"
            type="image"
            isStatus={true}
            isIcon={false}
            iconSize={25}
            iconColor={'#26C6DA'}
            badgeText={100}
            badgeColor={'#ffffff'}
            badgeBackground={'#ff9d00'}
            positionStatus="right"
          />
          <Name>Ana Catarina</Name>
        </Avatar>
        <Info>
          <Personal>
            <Title>Informações Pessoais</Title>

            <PersonalDataBold>Telefone:</PersonalDataBold>
            <PersonalData>27 3264-5555 </PersonalData>

            <PersonalDataBold>E-mail:</PersonalDataBold>
            <PersonalData>catariana@gmail.com</PersonalData>
          </Personal>

          <Title>Endereço</Title>
          <PersonalDataBold>Rua:</PersonalDataBold>
          <PersonalData>Av Achieta</PersonalData>

          <PersonalDataBold>Bairro:</PersonalDataBold>
          <PersonalData>Santa Cruz</PersonalData>

          <PersonalDataBold>Número:</PersonalDataBold>
          <PersonalData>350</PersonalData>
        </Info>
      </Container>
    );
  }
}
