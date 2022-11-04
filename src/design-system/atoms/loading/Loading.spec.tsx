import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading", () => {
  beforeEach(() => {
    render(<Loading />);
  });

  test("renders ", async () => {
    const loadingComponent = screen.queryByTestId(/loading/i);
    expect(loadingComponent).toBeInTheDocument();
  });
});

