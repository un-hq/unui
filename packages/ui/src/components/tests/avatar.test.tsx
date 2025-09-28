import { renderWithProviders as render } from "../../test-utils";
import { Avatar } from "../avatar";

it("renders container when src provided", () => {
  const { container } = render(<Avatar alt="U" src="https://example.com/u.png" />);
  const el = container.querySelector(".rounded-full");
  expect(el).toBeTruthy();
});

it("renders container when no src (fallback path)", () => {
  const { container } = render(<Avatar alt="U" />);
  const el = container.querySelector(".rounded-full");
  expect(el).toBeTruthy();
});