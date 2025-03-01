"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "../../lib/utils"
import { Icons } from "./icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Advanced Analytics",
    href: "/features/analytics",
    description:
      "Leverage powerful data analysis tools to uncover hidden patterns and trends.",
  },
  {
    title: "Real-time Predictions",
    href: "/features/predictions",
    description:
      "Get instant forecasts based on the latest data and market conditions.",
  },
  {
    title: "Secure Platform",
    href: "/features/security",
    description:
      "Your data is protected with enterprise-grade security and encryption.",
  },
  {
    title: "Customizable Dashboards",
    href: "/features/dashboards",
    description:
      "Create personalized views that focus on the metrics that matter to you.",
  },
  {
    title: "Collaborative Tools",
    href: "/features/collaboration",
    description:
      "Share insights and work together with your team in real-time.",
  },
  {
    title: "AI-Powered Insights",
    href: "/features/ai",
    description:
      "Leverage machine learning to uncover insights and make better predictions.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/"
                    style={{
                      backgroundImage: `url('/okdash_screenshot.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
                    
                    {/* Content on top of the gradient */}
                    <div className="relative z-10">
                      <Icons.logo className="h-6 w-6 text-white" />
                      <div className="mb-2 mt-4 text-lg font-medium text-white">
                        OkDash
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Data journalism as business intelligence. Agentic BI is here.
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About Us">
                Learn about our mission and the team behind OkEngine.
              </ListItem>
              <ListItem href="/pricing" title="Pricing">
                Explore our flexible pricing plans designed for businesses of all sizes.
              </ListItem>
              <ListItem href="/contact" title="Contact">
                Get in touch with our team for support or inquiries.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs" className={navigationMenuTriggerStyle()}>
            Documentation
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue/10 hover:text-blue-600 focus:bg-blue/10 focus:text-blue-600",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-dark-grey">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
