import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';



const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
}
