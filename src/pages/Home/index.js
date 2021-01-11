import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import Categories from '../../components/Categories';

import {Container} from './styles';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header />
        <ScrollView Vertical={true}>
          <Categories />
        </ScrollView>
      </Container>
    );
  }
}
