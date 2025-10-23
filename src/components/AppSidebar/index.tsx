"use client";

import {
  ChevronDownIcon,
  ChevronRight,
  CircleSmallIcon,
  LogOutIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "../ui/separator";
import { type MenuItem, menuItems } from "./menu-items";

type AppSidebarProps = {
  user?: string;
};

function SidebarCollapsibleItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const hasActiveSub =
    item.items?.some((sub) => sub.href === pathname) ?? false;
  const [open, setOpen] = useState(hasActiveSub);

  useEffect(() => {
    if (hasActiveSub) {
      setOpen(true);
    }
  }, [hasActiveSub]);

  return (
    <SidebarMenuItem>
      <Collapsible onOpenChange={setOpen} open={open}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="group relative mb-1"
            isActive={hasActiveSub}
          >
            {item.icon ? (
              <div className="relative">
                <item.icon className="!size-5" />
                <ChevronDownIcon
                  className={`absolute top-[17px] right-0 left-0 mx-auto size-3 group-data-[state=open]:rotate-180 ${
                    !isCollapsed && "hidden"
                  }`}
                />
              </div>
            ) : (
              <CircleSmallIcon className="!size-5" />
            )}
            <span>{item.label}</span>
            <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        {isCollapsed && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="pointer-events-none absolute inset-0" />
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.label}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuSubButton
                        asChild
                        isActive={subItem.href === pathname}
                      >
                        <Link href={subItem.href || "#"}>
                          {subItem.icon ? (
                            <subItem.icon className="!size-5" />
                          ) : (
                            <CircleSmallIcon className="!size-5" />
                          )}
                          {subItem.label}
                        </Link>
                      </SidebarMenuSubButton>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right">
                        {subItem.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

export function AppSidebar({ user = "User" }: AppSidebarProps) {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const pathname = usePathname();

  const MILLISECONDS_IN_SECOND = 1000;
  const SECONDS_IN_MINUTE = 60;
  const MILLISECONDS_IN_MINUTE = SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;
  const LOGO_SMALL = 40;
  const LOGO_LARGE = 50;

  useEffect(() => {
    const now = new Date();
    const msUntilNextMinute =
      (SECONDS_IN_MINUTE - now.getSeconds()) * MILLISECONDS_IN_SECOND -
      now.getMilliseconds();

    const initialTimeout = setTimeout(() => {
      setCurrentTime(new Date());
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, MILLISECONDS_IN_MINUTE);
      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(initialTimeout);
  }, [MILLISECONDS_IN_MINUTE]);

  const formattedTime = useMemo(
    () =>
      currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    [currentTime]
  );

  return (
    <Sidebar>
      <SidebarHeader className="flex-row items-center gap-x-3 overflow-hidden pr-4 pb-4">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              alt="logo"
              className={`h-auto transition-all duration-300 ${
                isCollapsed ? "mb-2 min-w-9 max-w-9" : "min-w-10 max-w-24"
              }`}
              height={isCollapsed ? LOGO_SMALL : LOGO_LARGE}
              src="/logo-placeholder.png"
              width={isCollapsed ? LOGO_SMALL : LOGO_LARGE}
            />
          </Link>
          {isCollapsed && (
            <span className="mx-auto font-medium text-slate-600 text-xs">
              {formattedTime}
            </span>
          )}
        </div>
        {!isCollapsed && (
          <div className="flex w-full justify-between">
            <div>
              <h2 className="font-semibold text-lg leading-none">
                Hi, <span>{user}</span>!
              </h2>
              <Badge className="rounded-full text-[10px] leading-none">
                Owner
              </Badge>
            </div>
            <span className="font-medium text-slate-600 text-sm">
              {formattedTime}
            </span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) =>
                item.items ? (
                  <SidebarCollapsibleItem item={item} key={item.label} />
                ) : (
                  <SidebarMenuItem key={item.label}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={item.href === pathname}
                          >
                            <Link href={item.href || "#"}>
                              {item.icon ? (
                                <item.icon className="!size-5" />
                              ) : (
                                <CircleSmallIcon className="!size-5" />
                              )}
                              {item.label}
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        {isCollapsed && (
                          <TooltipContent side="right">
                            {item.label}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="px-2">
        <Separator />
      </div>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton>
                    <LogOutIcon />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right">Logout</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
