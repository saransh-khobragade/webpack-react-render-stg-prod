import React from 'react';
import getConfig from '../config/secrets'

export default function Home() {

  const backendBaseURL = getConfig(process.env.NODE_ENV).backendBaseURL
  const backendUrl = getConfig(process.env.backendUrl)
  
  return (
    <div>
      Hello React for {backendBaseURL}
      backend url{backendUrl}
    </div>
  );
}
