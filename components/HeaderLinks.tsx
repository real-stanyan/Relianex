"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog...",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "Preview content behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Show task progress.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Separate content visually.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Layered sections displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Popup with extra info.",
  },
];

export default function HeaderLinks() {
  return (
    <div className="flex items-center gap-4 z-50">
      {/* Desktop: NavigationMenu */}
      <NavigationMenu viewport={false} className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none">
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-2 md:grid-cols-2 lg:w-[600px]">
                {components.map((c) => (
                  <ListItem key={c.title} title={c.title} href={c.href}>
                    {c.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Solutions</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blog</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <CircleHelpIcon />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <CircleIcon />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <CircleCheckIcon />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Language selector */}
      <Select>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="CN" className="flex items-center gap-2">
            <Image
              src={"/language_icon/CN_language.webp"}
              width={20}
              height={20}
              alt="CN"
            />
            <span>CN</span>
          </SelectItem>
          <SelectItem value="EN" className="flex items-center gap-2">
            <Image
              src={"/language_icon/EN_language.webp"}
              width={20}
              height={20}
              alt="EN"
            />
            <span>EN</span>
          </SelectItem>
        </SelectContent>
      </Select>

      <div className="hidden lg:block bg-[var(--card)] text-[var(--text)] p-3 rounded-2xl font-semibold">
        Get in Touch
      </div>

      {/* Mobile: DropdownMenu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="lg:hidden inline-flex items-center gap-1 rounded-xl px-3 py-2 text-[var(--foreground)]">
          <Menu size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>

          <DropdownMenuLabel className="mt-2">Services</DropdownMenuLabel>
          {components.slice(0, 4).map((c) => (
            <DropdownMenuItem key={c.title} asChild>
              <Link href={c.href} className="flex flex-col">
                <span className="font-medium">{c.title}</span>
                <span className="text-muted-foreground text-xs line-clamp-1">
                  {c.description}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/docs" className="font-medium">
              Solutions
            </Link>
          </DropdownMenuItem>

          <DropdownMenuLabel className="mt-2">Case Studies</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="#">Components</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Documentation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Blog</Link>
          </DropdownMenuItem>

          <DropdownMenuLabel className="mt-2">About Us</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="#">Components</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Documentation</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Blocks</Link>
          </DropdownMenuItem>

          <DropdownMenuLabel className="mt-2">Contact</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href="#" className="flex items-center gap-2">
              <CircleHelpIcon className="h-4 w-4" />
              Backlog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#" className="flex items-center gap-2">
              <CircleIcon className="h-4 w-4" />
              To Do
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#" className="flex items-center gap-2">
              <CircleCheckIcon className="h-4 w-4" />
              Done
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
