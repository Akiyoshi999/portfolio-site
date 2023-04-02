import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DateTerm from "../../../../src/components/atoms/DateTypography";

describe("正常性確認", () => {
  const trueDate1 = { before: "2018-10", after: "2020-10" };
  const trueDate2 = { before: "2018-10", after: "現在" };

  it("日付ー日付の値が渡ってきた場合", () => {
    render(<DateTerm date={trueDate1} />);
    expect(
      screen.getByText(new RegExp(`2018年10月.~.2020年10月`))
    ).toBeInTheDocument();
  }),
    it("日付ー空文字の値が渡ってきた場合", () => {
      render(<DateTerm date={trueDate2} />);
      expect(
        screen.getByText(new RegExp(`2018年10月.~.現在`))
      ).toBeInTheDocument();
    });
});
