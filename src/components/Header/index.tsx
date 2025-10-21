"use client";

import { Bell, MessagesSquare, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="relative overflow-hidden rounded-md">
        <Input
          className={`h-10 pr-10 transition-all duration-800 ease-in-out ${
            showSearch ? "max-w-md opacity-100" : "max-w-0 opacity-0"
          } `}
          placeholder="Search..."
        />
        <Button
          className="absolute top-0 right-1 bottom-0 my-auto size-8 cursor-pointer rounded-full bg-foreground transition-all duration-300 ease-in-out hover:bg-muted-foreground"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <SearchIcon className="size-4" />
        </Button>
      </div>

      <Button className="size-8 cursor-pointer bg-foreground hover:bg-muted-foreground">
        <MessagesSquare className="size-4" />
      </Button>
      <Button className="size-8 cursor-pointer bg-foreground hover:bg-muted-foreground">
        <Bell className="size-4" />
      </Button>
    </div>
  );
}
