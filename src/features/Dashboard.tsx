import * as React from 'react'
import { Stack } from '@mui/material'

import logo from './logo-jimmy.svg'
import { Manufactures } from './Manufactures'

export const Dashboard = () => (
    <Stack spacing={2} justifyContent="center" alignItems="center" paddingTop={2}>
        <img width={500} src={logo} alt="Jimmy Technologies logo" />
        <Manufactures />
    </Stack>
)
