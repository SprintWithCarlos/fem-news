import { render, screen } from "@testing-library/react";
import Picture from "./Picture";

describe("Picture", () => {
  beforeEach(() => {
    render(<Picture />);
  });

  test("renders ", async () => {
    const pictureComponent = screen.queryByTestId(/picture/i);
    expect(pictureComponent).toBeInTheDocument();
  });
});

