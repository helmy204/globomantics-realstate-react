import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Banner from './components/Banner';
import HouseList from './houses/HouseList';

function App() {

  return (
    <Container>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      <HouseList />
    </Container>
  );
}

export default App;
