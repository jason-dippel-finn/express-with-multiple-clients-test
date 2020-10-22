import './root.scss'

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'
import App from "./App"


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
)
