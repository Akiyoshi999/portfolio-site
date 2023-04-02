import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HashTag from "../../../../src/components/atoms/HashTag";

describe("正常性確認", () => {
  const text = "タグテスト";
  it("タグ表示確認", () => {
    render(<HashTag tagName={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
