import { Route, redirect, useRouter } from "@tanstack/react-router";
import { adminLayout } from "./AdminLayout";



export const adminIndexRoute = new Route({
  getParentRoute: () => adminLayout,
  path: "/",
  beforeLoad: async() => {
   
    if(localStorage.getItem("admin") === null) {
      throw redirect({
        to: "/auth",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          // redirect: router.state.location.href,
          redirect: "/",
        },
      });
    }
  },

  component: ({  }) => {
  const router = useRouter()
  return (
      <div className="w-full h-full flex items-center justify-center">
        <h3>Admin only section</h3>
        <button 
        onClick={() => {
          localStorage.removeItem("admin");
          router.navigate({to: "."});
        }}
        className="btn btn-sm">
          Logout
        </button>
      </div>
    );
  },
});
