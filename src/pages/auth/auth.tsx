import { Route, useRouter } from "@tanstack/react-router";
import { authlayout } from "./AuthLayout";



export const adminIndexRoute = new Route({
  getParentRoute: () => authlayout,
  path: "/",


  component: ({  }) => {
    const router = useRouter()
  return (
      <div className="w-full h-full flex items-center justify-center">
        <h3>Admin Login</h3>
        <button className="btn btn-sm"
        onClick={()=>{
          localStorage.setItem("admin", "true");
          router.navigate({to: ".."});
        }}
        >
          Login
        </button>
      </div>
    );
  },
});
