import { Route } from "@tanstack/router";
import { rootLayout } from "../routes/router";
import { HomePage } from "./HomePage";

export const homeRoute = new Route({
  getParentRoute: () => rootLayout,
  path: "/",
  component: HomePage,
});
