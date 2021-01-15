import React from 'react';
import AvatarSocial from 'react-native-avatar-social';

import {
  Container,
  Avatar,
  Name,
  Info,
  Personal,
  Title,
  PersonalData,
  Divider,
} from './styles';

const Perfil = () => {
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
          <PersonalData>Telefone: 27 3264-5555 </PersonalData>
          <PersonalData>E-mail: catariana@gmail.com</PersonalData>
        </Personal>

        <Title>Endereço</Title>
        <PersonalData>Rua: Av Achieta</PersonalData>
        <PersonalData>Bairro: Santa Cruz</PersonalData>
        <PersonalData>Numero: 350</PersonalData>
      </Info>
    </Container>
  );
};

export default Perfil;
