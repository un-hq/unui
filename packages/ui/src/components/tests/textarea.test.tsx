import { renderWithProviders as render } from "../../test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "../textarea";

it("renders textarea and accepts typing", async () => {
  const user = userEvent.setup();
  render(<Textarea placeholder="msg" />);
  const el = screen.getByPlaceholderText("msg");
  await user.type(el, "hello");
  expect((el as HTMLTextAreaElement).value).toBe("hello");
});