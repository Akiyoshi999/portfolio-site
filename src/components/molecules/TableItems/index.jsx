import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  CardHeader,
  Box,
} from "@mui/material";
import TableRowItem from "../../atoms/TableRowItem";
import emotionStyled from "@emotion/styled";

const HeaderBox = emotionStyled(Box)(({ css }) => css);

const TableItems = ({
  title,
  titleIcon,
  subheader,
  headItems,
  rowItemsList,
}) => {
  return (
    <TableContainer component={Paper}>
      {title && (
        <CardHeader
          title={
            <HeaderBox
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {titleIcon}
              <Box ml={2}>{title}</Box>
            </HeaderBox>
          }
          titleTypographyProps={{ variant: "h5" }}
          subheader={subheader}
          subheaderTypographyProps={{ variant: "h6" }}
        />
      )}
      <Table>
        {headItems && (
          <TableHead>
            <TableRowItem items={headItems} />
          </TableHead>
        )}
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
