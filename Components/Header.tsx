import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IHeader } from '../Language/HomePage/Header';
import {Spanish, English, ILanguage} from '../Language/Languages';

interface Props{
    useLanguage:[ILanguage, React.Dispatch<React.SetStateAction<ILanguage>>]
}
const Header :React.FC<Props> = ({useLanguage}) => {
  const [Language, setLanguage] = useLanguage;
  const {Home:{Header:{Header, Navigation}}} = Language;

  return(
    <>
        <Head>
            <title>{Header.PageTitle}</title>
            <meta name="description" content="Support children for a brigth future" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Link href="/" passHref ><Navbar.Brand>{Navigation.NavTitle}</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/About" passHref><Nav.Link>{Navigation.AboutPage}</Nav.Link></Link>
                            <Link href="/News" passHref><Nav.Link>{Navigation.News}</Nav.Link></Link>
                            <Link href="/Support" passHref><Nav.Link>{Navigation.Support}</Nav.Link></Link>
                            <Link href="/Documentation" passHref><Nav.Link>{Navigation.Documentation}</Nav.Link></Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={()=>setLanguage(English)}>EN</Nav.Link>
                            <Nav.Link onClick={()=>setLanguage(Spanish)}>ES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
        </header>
    </>
  )
}

export default Header 

{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}