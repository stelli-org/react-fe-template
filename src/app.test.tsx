import App from "./App";
import { render, screen } from "__tests__/test-utils";

describe("App Component", () => {
  it("should have hello world message", () => {
    render(<App text="Hello world" />);

    expect(screen.getByText("Hello world")).toBeVisible();
  });
});
