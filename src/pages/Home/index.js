import React, {Component} from 'react';

import CakesTraditional from '../../components/CakesTraditional';
import CakesCustom from '../../components/CakesCustom';
import Header from '../../components/Header';

import {Container} from './styles';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header />
        <CakesTraditional />
        <CakesCustom />
      </Container>
    );
  }
}
