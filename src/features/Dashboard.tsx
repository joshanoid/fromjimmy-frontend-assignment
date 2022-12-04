import * as React from 'react'
import { Box } from '@mui/material'

import logo from './logo-jimmy.svg'
import { Manufactures } from './Manufactures'

export const Dashboard = () => (
    <Box>
        <img src={logo} alt="Jimmy Technologies logo" />
        <Manufactures />
    </Box>
)
