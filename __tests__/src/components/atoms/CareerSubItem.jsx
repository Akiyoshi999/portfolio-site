import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CareerSubItem from "../../../../src/components/atoms/CareerSubItem";

describe("正常性確認", () => {
  const text = "テストコンテンツ";
  it("content表示確認", () => {
    render(<CareerSubItem content={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
