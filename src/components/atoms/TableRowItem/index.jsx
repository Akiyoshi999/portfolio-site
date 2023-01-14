import { TableCell, TableRow, Typography } from "@mui/material";

// const TableCell = (props) => (
//   <MuiTableCell {...props}>{props.children}</MuiTableCell>
// );

const TableRowItem = ({ items }) => {
  return (
    <TableRow>
      {items.map((item, _ind) => (
        <TableCell key={_ind} align="center">
          {typeof item === "string" ? <Typography>{item}</Typography> : item}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableRowItem;
