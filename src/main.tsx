import { defineCustomElements } from '@kolibri/lib/dist/loader'
import { register } from '@kolibri/core'
import { BMF } from '@kolibri/themes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { KolBadge, KolKolibri } from '@kolibri/react'

register(BMF, defineCustomElements).then(()=> {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <KolKolibri></KolKolibri>
      <App />
    </React.StrictMode>
  )
}).catch(console.warn);
