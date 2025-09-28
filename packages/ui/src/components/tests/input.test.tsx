import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders as render } from "../../test-utils";
import { Input } from "../input";

it("renders input and accepts typing", async () => {
  const user = userEvent.setup();
  render(<Input placeholder="email" />);
  const el = screen.getByPlaceholderText("email");
  await user.type(el, "hi@example.com");
  expect((el as HTMLInputElement).value).toBe("hi@example.com");
});

it("respects disabled", () => {
  render(<Input placeholder="x" disabled />);
  const el = screen.getByPlaceholderText("x");
  expect(el).toBeDisabled();
});

it("merges className", () => {
  render(<Input className="test-class" />);
  expect(screen.getByRole("textbox")).toHaveClass("test-class");
});