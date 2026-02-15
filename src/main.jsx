import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import posthog from 'posthog-js';

// Initialize PostHog
// REPLACE_ME: Add your Project API Key and Host here
posthog.init('phc_7ox3UA0wUMhAWZ7wOJWAn1v0PjeIMRcVSlNdNoCSPSv', {
  api_host: 'https://eu.i.posthog.com', // or 'https://eu.i.posthog.com'
  person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
