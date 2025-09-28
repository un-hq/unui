import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders as render } from "../../test-utils";
import { Switch } from "../switch";

it("toggles aria-checked on click", async () => {
  const user = userEvent.setup();
  render(<Switch defaultChecked />);

  const sw = screen.getByRole("switch");
  expect(sw).toHaveAttribute("aria-checked", "true");

  // first click -> off
  await user.click(sw);
  expect(sw).toHaveAttribute("aria-checked", "false");

  // second click -> on again
  await user.click(sw);
  expect(sw).toHaveAttribute("aria-checked", "true");
});