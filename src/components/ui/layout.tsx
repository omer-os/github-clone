import React from "react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";

type SidebarProps = React.ComponentProps<typeof Sidebar>;

export interface LayoutProps {
  children: React.ReactNode;
  leftSidebar?: SidebarProps;
  rightSidebar?: SidebarProps;
  navbar?: React.ReactNode;
  footer?: React.ReactNode;
  background?: React.ReactNode | string;
  navbarPosition?: "sticky" | "fixed" | "absolute" | "relative";
}

export function Layout({
  children,
  leftSidebar,
  rightSidebar,
  navbar,
  footer,
  background,
  navbarPosition = "sticky",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - Always on top */}
      {navbar && (
        <div
          className={cn(
            "w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            "z-50", // Highest z-index to stay above everything
            {
              "sticky top-0": navbarPosition === "sticky",
              "fixed top-0 left-0 right-0": navbarPosition === "fixed",
              "absolute top-0 left-0 right-0": navbarPosition === "absolute",
              relative: navbarPosition === "relative",
            }
          )}
        >
          {navbar}
        </div>
      )}

      {/* Main container */}
      <SidebarProvider>
        <div className="flex-1 flex">
          {/* Background */}
          {background && (
            <div className="fixed inset-0 -z-10">
              {typeof background === "string" ? (
                <div className={cn("w-full h-full", background)} />
              ) : (
                background
              )}
            </div>
          )}

          {/* Content wrapper */}
          <div className="flex flex-1 w-full">
            {/* Left Sidebar */}
            {leftSidebar && (
              <aside className="z-30">
                <Sidebar {...leftSidebar}>
                  <SidebarContent>{leftSidebar.children}</SidebarContent>
                </Sidebar>
              </aside>
            )}

            {/* Main Content */}
            <main className="flex-1 min-w-0 overflow-auto">
              <div className="h-full">{children}</div>
            </main>

            {/* Right Sidebar */}
            {rightSidebar && (
              <aside className="z-30">
                <Sidebar {...rightSidebar} side="right">
                  <SidebarContent>{rightSidebar.children}</SidebarContent>
                </Sidebar>
              </aside>
            )}
          </div>
        </div>
      </SidebarProvider>

      {/* Footer */}
      {footer && (
        <footer className="z-40 w-full bg-background border-t border-border">
          {footer}
        </footer>
      )}
    </div>
  );
}
