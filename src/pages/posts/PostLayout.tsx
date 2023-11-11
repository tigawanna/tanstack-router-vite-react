import { rootLayout } from "@/main";
import { Outlet, Route } from "@tanstack/react-router";
import { postsIndexRoute } from "./Posts";
import { onePostRoute } from "./OnePost";


export const postsLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "posts",
  component:()=>{
    return (
      <div className="w-full h-full flex items-center ">
        <Outlet />
      </div>
    );
  }
});

export const postsRoute = postsLayout.addChildren([postsIndexRoute, onePostRoute]);
