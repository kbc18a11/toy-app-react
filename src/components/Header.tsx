import { Navbar, Container } from 'react-bootstrap';

export const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">Toy App</Navbar.Brand>
    </Container>
  </Navbar>
);
