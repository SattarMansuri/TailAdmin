import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Provider from './components/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
