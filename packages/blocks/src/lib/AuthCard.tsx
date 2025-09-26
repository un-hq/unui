import * as React from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Separator, Button, Input, Label
} from "@unhq/ui";
import { cn } from "@unhq/ui";

export interface AuthCardProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Card>, "onSubmit"> {
  title?: string;
  description?: string;
  emailLabel?: string;
  passwordLabel?: string;
  ctaLabel?: string;
  loading?: boolean;
  onSubmit?: (values: { email: string; password: string }) => void | Promise<void>;
  footerSlot?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function AuthCard({
  className,
  title = "Sign in",
  description,
  emailLabel = "Email",
  passwordLabel = "Password",
  ctaLabel = "Sign in",
  loading = false,
  onSubmit,
  footerSlot,
  children,
  ...cardProps // ← only Card props get forwarded
}: AuthCardProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await onSubmit?.({ email, password });
  }

  return (
    <Card {...cardProps} className={cn("max-w-sm mx-auto", className)}>
      {title || description ? (
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? <CardDescription>{description}</CardDescription> : null}
        </CardHeader>
      ) : null}

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">{emailLabel}</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">{passwordLabel}</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
                required
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "…" : ctaLabel}
            </Button>
          </div>
          {children}
        </form>
      </CardContent>

      {footerSlot ? <CardFooter>{footerSlot}</CardFooter> : null}
    </Card>
  );
}