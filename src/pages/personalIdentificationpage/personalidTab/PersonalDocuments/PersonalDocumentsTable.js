

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#EFEDED" ,
    color: "#6A6A6A",
    fontFamily: "Roboto",

fontWeight: 500,
fontSize: "20px",
lineHeight: "23px",
  },
  body: {
    fontSize: "18px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('My-passportDocument.pdf', "Passport", "Pending", ""),
  createData('My-passportDocument.pdf', "Passport", "Pending", ""),
  createData('My-passportDocument.pdf', "Passport", "Pending", ""),
  createData('My-passportDocument.pdf', "Passport", "Pending", ""),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PersonalDocumentsTable () {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DOCUMENT NAME</StyledTableCell>
            <StyledTableCell >DOCUMENT TYPE</StyledTableCell>
            <StyledTableCell >STATUS</StyledTableCell>
            <StyledTableCell >Delete</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
              <StyledTableCell ><IconButton edge="end" aria-label="delete">
                      <DeleteIcon/>
                    </IconButton></StyledTableCell>
            
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

