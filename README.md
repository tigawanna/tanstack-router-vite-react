# React + TypeScript + Tanstack Router

This is a basic starter template for React + TypeScript + Tanstack Router.

it comprises of

| Path   | Description                                      |
| ------ | ------------------------------------------------ |
| /      | root layout + route                              |
| /admin | protected route                                  |
| /auth/ | login route (will redirect if already logged in) |
| /posts | posts route + query loader                       |
| /post  | post route + query loader                        |

# tips

- to use params in routes ( dynamic routes )

```ts
const userRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "$id",
  component: ProfileUser,
});
```

```tsx
  <Link to="/profile/$id" params={{ id: "marko" }}>
        Marko Profile
      </Link>
      <Link to="/profile/$id" params={{ id: "polo" }}>
        Polo Profile
      </Link>
```

- to use search params

```tsx
export const authlayout = new Route({
  getParentRoute: () => rootLayout,
  path: "auth",
  component: AuthLayout,
  validateSearch: (search: Record<string, unknown>): AuthSearch => {
    // validate and parse the search params into a typed state
    return {
      // you can use zod or valibot to validate this
      redirect: (search.redirect as string) ?? "/",
    };
  },
});
```

To auth guard routes we use the beforeLoad
```ts
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


```
Once logged in we redirect authenticated users from the login pages

```ts
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


```

- you can listen for navigation pending state and show a NProgress bar for better UX

```tsx
  const router = useRouter();
  const status = router.state.status;
  ----
  ----
  <Nprogress isAnimating={status === "pending"} />
```
