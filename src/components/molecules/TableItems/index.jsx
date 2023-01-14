import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import TableRowItem from "../../atoms/TableRowItem";

const TableItems = ({ headItems, rowItemsList }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRowItem items={headItems} />
        </TableHead>
        <TableBody>
          {rowItemsList.map((rowItems, _ind) => (
            <TableRowItem items={rowItems} key={_ind} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableItems;
