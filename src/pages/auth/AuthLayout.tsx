import { rootLayout } from "@/main";
import { Outlet, Route, useRouter } from "@tanstack/react-router";
import { adminIndexRoute } from "./auth";


export const authlayout = new Route({
  getParentRoute: () => rootLayout,
  path: "auth",
  beforeLoad: async () => {

    if (localStorage.getItem("admin") !== null) {
      return {
        redirect: "/admin",
      };
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
