import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/app/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
