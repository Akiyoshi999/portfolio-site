import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageComponent from "../../../../src/components/atoms/ImageComponent";

describe("正常性確認", () => {
  const imgPath = "/images/test.png";
  it("content表示確認", () => {
    render(<ImageComponent img={imgPath} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
