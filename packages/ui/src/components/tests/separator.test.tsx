import { screen } from "@testing-library/react";
import { renderWithProviders as render } from "../../test-utils";
import { Separator } from "../separator";

it("renders a non-interactive separator element", () => {
  const { container } = render(<Separator />);
  const sep = container.querySelector('[data-orientation="horizontal"]');
  expect(sep).toBeInTheDocument();
  expect(sep).toHaveAttribute("role", "none");
});

it("supports vertical orientation", () => {
  const { container } = render(<Separator orientation="vertical" />);
  const sep = container.querySelector('[data-orientation="vertical"]');
  expect(sep).toBeInTheDocument();
  expect(sep).toHaveAttribute("role", "none");
});