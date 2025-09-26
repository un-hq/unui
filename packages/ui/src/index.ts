// label
export { Label } from "./components/label";
export type { LabelProps } from "./components/label";

// input  <-- ADD THIS
export { Input } from "./components/input";
export type { InputProps } from "./components/input";
export { inputVariants, type InputVariantProps } from "./recipes/input";

// textarea
export { Textarea } from "./components/textarea";
export type { TextareaProps } from "./components/textarea";
export { textareaVariants, type TextareaVariantProps } from "./recipes/textarea";

// switch
export { Switch } from "./components/switch";
export type { SwitchProps } from "./components/switch";

// select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator
} from "./components/select";
export type { SelectTriggerProps } from "./components/select";

export { cn } from "./utils/cn";

// avatar
export { Avatar, AvatarImage, AvatarFallback } from "./components/avatar";

// separator
export { Separator } from "./components/separator";
export type { SeparatorProps } from "./components/separator";

// button
export { Button } from "./components/button";
export type { ButtonProps } from "./components/button";

// card (all parts)
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/card";

// badge
export { Badge } from "./components/badge";
export type { BadgeProps } from "./components/badge";
