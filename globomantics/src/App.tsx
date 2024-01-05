import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Banner from './components/Banner';

function App() {

  const jsx = <div>Hi</div>;

  return (
    <Container>
      {jsx}
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
    </Container>
  );
}

export default App;
