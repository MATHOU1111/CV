import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../chakra-theme.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
