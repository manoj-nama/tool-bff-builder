import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

const loadConfig = () => {
  console.log("Loading configs");
  return new Promise(resolve => {
    resolve();
  });
}

const bootstrap = async () => {
  //do something
  await loadConfig();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

bootstrap();

