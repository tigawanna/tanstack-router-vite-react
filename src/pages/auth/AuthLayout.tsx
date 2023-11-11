import { rootLayout } from "@/main";
import { Outlet, Route, redirect, useRouter } from "@tanstack/react-router";
import { adminIndexRoute } from "./auth";


export const authlayout = new Route({
  getParentRoute: () => rootLayout,
  path: "auth",
  beforeLoad: async () => {

    if (localStorage.getItem("admin") !== null) {
      throw redirect({
        to: "/",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          // redirect: router.state.location.href,
          // redirect: "/",
        },
      });
    }
  },
  component: () => {
    return (
      <div className="w-full h-full flex items-center ">
        <Outlet />
      </div>
    );
  },
});

export const authRoute = authlayout.addChildren([adminIndexRoute]);
