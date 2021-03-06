import React, { PureComponent } from 'react';

import { Row } from 'styled/Responsive';
import Email from 'components/Email/Email';
import Phone from 'components/Phone/Phone';
import Nav from './Nav/Nav';
import SocialNav from './SocialNav/SocialNav';

import {
  HeaderWrap,
  ContactRow,
  HeaderTag,
} from './Header.styled';


class Header extends PureComponent {
  render() {
    return (
      <HeaderTag>
        <HeaderWrap>
          <Row justifyContent="flex-end">
            <SocialNav />
          </Row>
          <ContactRow justifyContent="flex-end">
            <div>
              <Email />
              <Phone />
            </div>
          </ContactRow>
          <Row justifyContent="flex-start">
            <Nav />
          </Row>
        </HeaderWrap>
      </HeaderTag>
    );
  }
}
export default Header;
