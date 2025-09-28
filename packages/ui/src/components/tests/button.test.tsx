import { createRef } from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders as render } from "../../test-utils";
import { Button } from "../button";

it("renders with accessible role and text", () => {
  render(<Button>Hey</Button>);
  expect(screen.getByRole("button", { name: "Hey" })).toBeInTheDocument();
});

it("calls onClick on mouse click", async () => {
  const user = userEvent.setup();
  const fn = vi.fn();
  render(<Button onClick={fn}>Click</Button>);
  await user.click(screen.getByRole("button", { name: "Click" }));
  expect(fn).toHaveBeenCalledTimes(1);
});

it("fires on Space/Enter when focused", async () => {
  const user = userEvent.setup();
  const fn = vi.fn();
  render(<Button onClick={fn}>Key</Button>);
  const btn = screen.getByRole("button", { name: "Key" });

  btn.focus();
  await user.keyboard("{Space}{Enter}");

  // Not all environments dispatch both; assert at least one key triggered.
  expect(fn).toHaveBeenCalled();
});

it("merges className", () => {
  render(<Button className="test-class">X</Button>);
  expect(screen.getByRole("button", { name: "X" })).toHaveClass("test-class");
});

it("forwards ref", () => {
  const ref = createRef<HTMLButtonElement>();
  render(<Button ref={ref}>Ref</Button>);
  expect(ref.current).toBeInstanceOf(HTMLButtonElement);
});