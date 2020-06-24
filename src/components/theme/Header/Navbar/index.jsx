import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">Mateus Mendes</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
