"use client";

import { Layout } from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Plus, Search, Github, Star, GitFork } from "lucide-react";

export default function Home() {
  return (
    <Layout
      navbarPosition="sticky"
      navbar={
        <div className="flex h-14 bg-background z-50 items-center gap-4 px-4">
          <Button variant="ghost" size="icon" className="shrink-0">
            <Github className="h-5 w-5" />
          </Button>
          <div className="flex-1 flex items-center gap-4">
            <div className="w-full max-w-[600px]">
              <Input
                placeholder="Type / to search"
                className="bg-muted/50 border-input/50"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      }
      leftSidebar={{
        children: (
          <ScrollArea className="h-full mt-14">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold">Top repositories</h2>
                <Button size="sm" variant="ghost">
                  <Plus className="h-4 w-4 mr-2" />
                  New
                </Button>
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="p-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-4 w-4">
                        <AvatarFallback>R</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        repository-{i + 1}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Updated 3 days ago
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        ),
        className: "border-r border-border/40",
      }}
      rightSidebar={{
        children: (
          <ScrollArea className="h-full mt-14">
            <div className="flex flex-col gap-4 p-4">
              <h2 className="text-sm font-semibold">Latest Activity</h2>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm">
                        <span className="font-medium">user-{i + 1}</span>{" "}
                        starred a repository
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>3 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <Card className="p-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-4 w-4">
                          <AvatarFallback>R</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          featured-repo-{i + 1}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Amazing repository with lots of features
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>1.2k</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          <span>234</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Separator />
                </div>
              ))}
            </div>
          </ScrollArea>
        ),
        className: "border-l border-border/40",
      }}
    >
      <ScrollArea className="h-full">
        <div className="container max-w-6xl mx-auto p-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Home</h1>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              New repository
            </Button>
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">user-{i + 1}</span>
                      <span className="text-sm text-muted-foreground">
                        created a new repository
                      </span>
                      <span className="text-sm text-muted-foreground">
                        • 2h ago
                      </span>
                    </div>
                    <Card className="p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback>R</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">
                            awesome-project-{i + 1}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          A fantastic new project that does amazing things
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>123</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            <span>45</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </Layout>
  );
}
