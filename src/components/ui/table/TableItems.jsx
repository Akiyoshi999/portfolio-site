import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import TableRowItems from "./TableRowItems";

const TableItems = ({ head, body }) => {
  const tableHead = (
    <TableRow>
      {head.map((cell) => (
        <TableCell key={cell} align="center">
          <Typography variant="h6">{cell}</Typography>
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>{tableHead}</TableHead>
        <TableBody>
          <TableRowItems body={body} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableItems;
