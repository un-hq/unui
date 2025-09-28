import { renderWithProviders as render } from "../../test-utils";
import { screen } from "@testing-library/react";
import { Label } from "../label";
import { Input } from "../input";

it("associates with input via htmlFor", () => {
  render(
    <>
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
    </>
  );
  expect(screen.getByLabelText("Email")).toBeInstanceOf(HTMLInputElement);
});