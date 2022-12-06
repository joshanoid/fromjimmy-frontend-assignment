import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './features/Router'
import './index.css'

const rootElement = document.createElement('div')
const root = createRoot(rootElement)

document.body.append(rootElement)

const queryClient = new QueryClient()

const App = () => (
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)

root.render(<App />)
