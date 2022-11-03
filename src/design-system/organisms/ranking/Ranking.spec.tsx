import { render, screen } from "@testing-library/react";
import Ranking from "./Ranking";

describe("Ranking", () => {
  beforeEach(() => {
    render(<Ranking />);
  });

  test("renders ", async () => {
    const rankingComponent = screen.queryByTestId(/ranking/i);
    expect(rankingComponent).toBeInTheDocument();
  });
});

