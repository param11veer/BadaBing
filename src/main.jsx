import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDom from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
