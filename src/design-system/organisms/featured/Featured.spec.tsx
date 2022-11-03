import { render, screen } from "@testing-library/react";
import Featured from "./Featured";

describe("Featured", () => {
  beforeEach(() => {
    render(<Featured />);
  });

  test("renders ", async () => {
    const featuredComponent = screen.queryByTestId(/featured/i);
    expect(featuredComponent).toBeInTheDocument();
  });
});

