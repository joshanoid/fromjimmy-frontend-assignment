import * as React from 'react'
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Paper,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchManufacturers } from '../../utils/api'
import { ManufacturersResponse } from '../../utils/types'

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#6A24FF',
        color: '#fcfcff',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#e5f9ff',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

export const Manufactures = () => {
    const [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(true)
    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery<
        ManufacturersResponse,
        Error
    >({
        queryKey: ['manufacturers'],
        queryFn: fetchManufacturers,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })
    const getLoadButtonText = () => {
        if (isFetchingNextPage) {
            return 'Loading more manufacturers...'
        }

        if (hasNextPage) {
            return 'Load more'
        }

        return 'No more manufacturers to load'
    }

    React.useEffect(() => {
        setErrorSnackbarOpen(status === 'error')
    }, [status])

    return (
        <Box padding={5}>
            {status === 'loading' && <CircularProgress style={{ position: 'fixed', right: 10, top: 10 }} />}
            <Snackbar
                open={errorSnackbarOpen}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={6000}
                onClose={() => setErrorSnackbarOpen(false)}
            >
                <Alert
                    onClose={() => setErrorSnackbarOpen(false)}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error?.message}
                </Alert>
            </Snackbar>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Country</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.pages.map((page) => (
                            <React.Fragment key={(page.nextPage ?? 1) - 1}>
                                {page.Results.map((row) => (
                                    <StyledTableRow key={row.Mfr_ID}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.Mfr_ID}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.Mfr_Name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.Country}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button onClick={() => {}} variant="contained" size="small">
                                                Details
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                variant="contained"
                fullWidth
            >
                {getLoadButtonText()}
            </Button>
        </Box>
    )
}
