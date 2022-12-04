import * as React from 'react'
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchManufacturers } from '../../utils/api'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

export const Manufactures = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['manufacturers'],
        queryFn: fetchManufacturers,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    })

    return (
        <Box padding={5}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                            <React.Fragment key={page.nextPage - 1}>
                                {page.Results.map((row) => (
                                    <StyledTableRow key={row.Mfr_ID}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.Mfr_ID}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.Mfr_Name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.Country}</StyledTableCell>
                                        <StyledTableCell align="right">Button</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </Button>
        </Box>
    )
}
