import React from 'react';
import getConfig from '../config/secrets'

export default function Home() {

  const backendBaseURL = getConfig(process.env.NODE_ENV).backendBaseURL
  
  return (
    <div>
      Hello React for {backendBaseURL}
    </div>
  );
}
