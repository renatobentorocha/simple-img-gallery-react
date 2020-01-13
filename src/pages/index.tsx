import React from 'react';
import Gallery from '../components/Gallery';
import images from '../data';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Gallery images={images} infiniteLoop={false} />
    </Container>
  );
}
