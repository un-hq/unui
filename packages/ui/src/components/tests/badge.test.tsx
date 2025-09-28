import { screen } from "@testing-library/react";
import { renderWithProviders as render } from "../../test-utils";
import { Badge } from "../badge";

it("renders children", () => {
  render(<Badge>OK</Badge>);
  expect(screen.getByText("OK")).toBeInTheDocument();
});

it("merges className", () => {
  render(<Badge className="test-x">OK</Badge>);
  expect(screen.getByText("OK")).toHaveClass("test-x");
});