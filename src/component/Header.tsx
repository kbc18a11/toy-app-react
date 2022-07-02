import { Navbar, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Toy App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
