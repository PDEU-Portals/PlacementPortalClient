import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Header from "../Header/AdminHeader";
import { Typography } from "@mui/material";

function createData(rno, name, cv, marksheet, sem, details) {
  return { rno, name, cv, marksheet, sem, details };
}

const rows = [
  createData("21BCP185", "Karan Dattani", "Resume", 90, 39, "more"),
  createData("21BCP185", "Anike Patel", "Resume", 90, 39, "more"),
  createData("21BCP185", "Dev parikh", "Resume", 90, 39, "more"),
  createData("21BCP185", "Saurav Navdhare", "Resume", 90, 39, "more"),
  createData("21BCP185", "Istuti Maurya", "Resume", 90, 45, "more"),
];

export default function AdminTable() {
  return (
    <>
    <Header/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px" color="black" >Roll Number</Typography></TableCell>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px"   color="black" >Name</Typography></TableCell>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px"  color="black">CV (Resume)</Typography></TableCell>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px"  color="black">12th Marksheet</Typography></TableCell>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px"  color="black">Sem 1</Typography></TableCell>
              <TableCell align="center"><Typography fontWeight={600} fontSize="24px"  color="black">Details</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody  >
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.rno}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  <Stack direction="row"  alignItems="right" justifyContent="center">
                    <a href="/Resume.pdf" target="_blank">
                      {row.cv}
                    </a>
                  </Stack>
                </TableCell>
                <TableCell align="center">{row.marksheet}</TableCell>
                <TableCell align="center">{row.sem}</TableCell>
                <TableCell align="right">
                  <Stack spacing={2} direction="row" alignItems="right" justifyContent="center">
                    <Link to="/students/profile">
                      <Button variant="contained">{row.details}</Button>
                    </Link>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
