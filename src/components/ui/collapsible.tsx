"use client";

import {
  CollapsibleContent as RCollapsibleContent,
  CollapsibleTrigger as RCollapsibleTrigger,
  Root,
} from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

function Collapsible({ ...props }: React.ComponentProps<typeof Root>) {
  return <Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof RCollapsibleTrigger>) {
  return <RCollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof RCollapsibleContent>) {
  return (
    <RCollapsibleContent
      className={cn(
        "overflow-hidden transition-all duration-400 ease-in-out",
        "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className
      )}
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
