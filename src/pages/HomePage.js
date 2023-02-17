import React from 'react';
import "./styles.css";

import Overlay from '../components/Overlay/Overlay';

export default function HomePage({apiKey, baseUrl}) {
  return (
    <div className='homepage-container'>
      <Overlay apiKey={apiKey} baseUrl={baseUrl} />
    </div>
  )
}
