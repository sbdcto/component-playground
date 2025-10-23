import { LayoutDashboard } from "lucide-react";

export type MenuItem = {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  items?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Calendar",
    href: "/ui/calendar",
  },
  // {
  //   label: "Properties",
  //   icon: HousePlus,
  //   items: [
  //     { label: "All Properties", href: "/properties" },
  //     { label: "Active Listings", href: "/properties/active" },
  //     { label: "Sold Properties", href: "/properties/sold" },
  //   ],
  // },
];
