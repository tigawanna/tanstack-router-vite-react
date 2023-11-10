import { Route } from "@tanstack/react-router";
import { HomePage } from "./HomePage";
import { rootLayout } from "@/main";

export const homeRoute = new Route({
  getParentRoute: () => rootLayout,
  path: "/",
  component: HomePage,
});
