import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ModeProvider } from './context/ModeContext';
import { ProfileProvider } from './context/ProfileContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </ModeProvider>
  </StrictMode>,
)
