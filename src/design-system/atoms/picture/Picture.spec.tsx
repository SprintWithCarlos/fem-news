import { render, screen } from "@testing-library/react";
import Picture from "./Picture";

describe("Picture", () => {
  beforeEach(() => {
    render(
      <Picture
        desktop="/public/image-web-3-desktop.jpg"
        mobile="/public/image-web-3-mobile.jpg"
      />
    );
  });

  test("renders ", async () => {
    const pictureComponent = screen.queryByTestId(/picture/i);
    expect(pictureComponent).toBeInTheDocument();
  });
});
