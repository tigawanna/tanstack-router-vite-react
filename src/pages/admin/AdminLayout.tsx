import { rootLayout } from "@/main";
import { Outlet, Route } from "@tanstack/react-router";
import { adminIndexRoute } from "./admin";




export const adminLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "admin",
  component:()=>{
    return (
      <div className="w-full h-full flex items-center ">
        <Outlet />
      </div>
    );
  }
});

export const adminRoute = adminLayout.addChildren([adminIndexRoute]);
