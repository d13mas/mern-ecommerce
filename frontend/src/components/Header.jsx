import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <header>
                <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                    <Container>
                        <Navbar.Brand href='/'>ProShop v1</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav.Link href='/cart'>
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;
