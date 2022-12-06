import * as React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Stack } from '@mui/material'

import logo from './logo-jimmy.svg'
import { Manufacturers } from './Manufacturers'
import { ManufacturerDetails } from './ManufacturerDetails'

export const Router = () => (
    <Stack spacing={2} justifyContent="center" alignItems="center" paddingTop={2}>
        <Link to="/">
            <img width={500} src={logo} alt="Jimmy Technologies logo" />
        </Link>
        <Routes>
            <Route path="/" element={<Manufacturers />} />
            <Route path="/details/:manufacturerId/:manufacturerName" element={<ManufacturerDetails />} />
            <Route path="*" element={<Manufacturers />} />
        </Routes>
    </Stack>
)
