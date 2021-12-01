import React from 'react';
import Cart from './Cart';
import styled from 'styled-components';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { pages } from '../pages/pages';

const StyledNavbar = styled(Navbar)`
    max-height: 6rem;
    box-shadow: 0 0.1rem 0.5rem 0 rgb(0 0 0 / 4%),
        0 0.14rem 0.3125rem 0 rgb(0 0 0 / 4%);
`;

const StyledCart = styled(Cart)`
    max-heigth: inherit;
`;

const StyledNavLogo = styled(Image)`
    display: block;
    max-height: 5rem;
    width: auto;
`;

const NavbarPannel = () => {
    return (
      <>
        <StyledNavbar>
            <Container>
             
                <Nav.Link>
                    <StyledNavLogo
                        src={process.env.PUBLIC_URL + 'logo.jpg'}
                        alt='logo'
                    ></StyledNavLogo>
                </Nav.Link>

                {pages.map((page) => (
                    <Nav.Link key={page.id}>{page.title}</Nav.Link>
                ))}
                <StyledCart/>
               
            </Container>
        </StyledNavbar>
        </>
    );
};

export default NavbarPannel;