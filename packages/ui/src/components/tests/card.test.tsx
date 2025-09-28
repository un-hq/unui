import { renderWithProviders as render } from "../../test-utils";
import { screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardContent } from "../card";

it("composes header/title/content", () => {
  render(
    <Card>
      <CardHeader><CardTitle>Title</CardTitle></CardHeader>
      <CardContent>Body</CardContent>
    </Card>
  );
  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Body")).toBeInTheDocument();
});