import { styled, Typography as MuiTypography } from "@mui/material";

const yearMonth = (targetDate) => {
  if (targetDate === "現在") return "現在";
  const date = new Date(targetDate);
  if (isNaN(date)) return "";
  const [year, month] = [date.getFullYear(), date.getMonth() + 1];
  return `${year}年${month}月`;
};

const term = ({ before, after }) => {
  const beforeDate = yearMonth(before);
  const afterDate = yearMonth(after);

  return `${beforeDate}\n~\n${afterDate}`;
};

const Typography = styled(MuiTypography)(({ theme }) =>
  theme.unstable_sx({
    whiteSpace: "pre-wrap",
  })
);

const DateTerm = ({ date }) => {
  return <Typography>{term(date)}</Typography>;
};

export default DateTerm;
