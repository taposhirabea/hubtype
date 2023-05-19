import React from 'react'
import {TablePagination, Typography, Pagination} from '@mui/material';

export default function Paginations() {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  // };

  // return (
  //   <Stack spacing={2}>
  //     <Typography>Page: {page} </Typography>
  //     <Pagination count={10} page={page} onChange={handleChange} />
  //   </Stack>
  // );
    const [page, setPage] = React.useState(0);
    const [items] =React.useState("items")
     const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      // setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
  return (
    <TablePagination
      component="div"
      count={60}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={page}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )

}
