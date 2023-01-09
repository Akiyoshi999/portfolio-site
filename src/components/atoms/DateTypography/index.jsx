import {
  experimental_sx,
  styled,
  Typography as MuiTypography,
} from "@mui/material";

const yearMonth = (targetDate) => {
  const date = new Date(targetDate);
  if (isNaN(date)) {
    return "現在";
  }
  const [year, month] = [date.getFullYear(), date.getMonth() + 1];
  return `${year}年${month}月`;
};
const term = ({ before, after }) => {
  const beforeDate = yearMonth(before);
  const afterDate = yearMonth(after);

  return `${beforeDate}
      ~
      ${afterDate}`;
};

const Typography = styled(MuiTypography)(
  experimental_sx({
    whiteSpace: "pre-wrap",
  })
);

const DateTerm = ({ date }) => {
  return <Typography>{term(date)}</Typography>;
};

export default DateTerm;
