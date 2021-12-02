import React from 'react';
import { pageTitles } from '../utils/consts';
import { HOME_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';



const NavbarPannel = () => {

    const styles = {
        link: {
            color: 'black',
            textDecoration: 'none',
            paddingBottom: '1rem',
        },

        linkActive: {
            borderBottom: '1.1rem solid red',
           
        },

        header: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.125rem',
            boxShadow: `0 0.2rem 0.4rem rgb(0 0 0 / 0.06), 
                        0 0.6rem 0.9rem rgb(0 0 0 / 0.04)`,
        }
    }

    
    return (
        <Navbar 
            bg='light' 
            expand='lg'
            style={styles.header}
            >
            <Container>
                <NavLink to = {HOME_ROUTE} style={{height: '5rem'}}>
                    <Image 
                        src = {process.env.PUBLIC_URL + 'logo.jpg'} 
                        alt = 'logo'
                        style={{height: '5rem'}}
                    />
                </NavLink>
                    
                    {pageTitles.map((page) => (
                        <NavLink 
                            
                            exact to = {page.link}
                            
                            style={styles.link}
                            
                            
                            key = {page.id}> {page.title} 
                        </NavLink>
                    ))}
                    
            </Container>
        </Navbar>
    );
};

export default NavbarPannel;
