import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import logo from './logo-jimmy.svg'

const rootElement = document.createElement('div')
const root = createRoot(rootElement)

document.body.append(rootElement)

const queryClient = new QueryClient()

const App = () => (
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <img src={logo} alt="Jimmy Technologies logo" />
            <div>App skeleton</div>
        </QueryClientProvider>
    </React.StrictMode>
)

root.render(<App />)