import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";

export function renderWithProviders(ui: React.ReactElement) {
  // Add providers here if you introduce any later (theme, i18n, etc.)
  const Wrapper = ({ children }: PropsWithChildren) => <>{children}</>;
  return render(ui, { wrapper: Wrapper });
}