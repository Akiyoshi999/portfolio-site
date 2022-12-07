import { TableCell, TableRow } from "@mui/material";

const TableRowItems = ({ body }) => {
  return body.map((row) => (
    <TableRow key={row.id}>
      {Object.keys(row)
        .filter((key) => key !== "id")
        .map((key) => (
          <TableCell key={`${key}_${row[key]}`} align="center">
            {row[key]}
          </TableCell>
        ))}
    </TableRow>
  ));
};

export default TableRowItems;
