import * as React from 'react'
import { Box, CircularProgress, Grid, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { useManufacturerDetails } from './utils'

const Details = ({ manufacturerId }: { manufacturerId: number }) => {
    const details = useManufacturerDetails(manufacturerId)

    return (
        <Paper>
            <Box maxWidth={1000} width={600} padding={5}>
                <Typography variant="h3" align="center">
                    Manufacturer Details
                </Typography>
                {details ? (
                    <Grid container spacing={1} mt={2}>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>ID:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {details.Mfr_ID}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>Name:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {details.Mfr_Name}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>Country:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {details.Country ?? ''}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>City:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {details.City ?? ''}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>Address:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {details.Address ?? ''}
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ fontWeight: 'bold' }}>Principal Name:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            {`${details.PrincipalFirstName ?? ''} ${details.PrincipalLastName ?? ''}`}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 'bold' }}>Models:</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List dense>
                                {details.models.map((model) => (
                                    <ListItem key={model.Model_ID}>
                                        <ListItemText>- {model.Model_Name}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                ) : (
                    <Stack justifyContent="center" alignItems="center" spacing={2} mt={2}>
                        <CircularProgress />
                        <Typography>Loading details...</Typography>
                    </Stack>
                )}
            </Box>
        </Paper>
    )
}

export const ManufacturerDetails = () => {
    const { manufacturerId } = useParams()

    if (manufacturerId) {
        return <Details manufacturerId={Number.parseInt(manufacturerId)} />
    }

    return null
}
