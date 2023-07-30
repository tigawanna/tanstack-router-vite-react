# React + TypeScript + Tanstack Router
 
 This is a basic starter template for React + TypeScript + Tanstack Router.

it comprises of 

  |   Path        |       Description        |
  |---------------|---------------------------|
  |  /            |    root layout + route      |
  |  /profile     |    profile route            |
  |  /profile/$id  | dynamic profile route |
  |  /admin       |  protected route       |
  |  /auth/ | login route (will redirect if already logged in) |

 # tips
 - to use params in routes ( dynamic routes )
  
 
```ts
  const userRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "$id",
  component: ProfileUser
})
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
```ts
   import { authlayout } from "./config";
  const router = useRouter();
// include the route id for better typesafety
  const { redirect } = useSearch({ from: authlayout.id });

  //  if already , redirect fomr the login page to the recent page
  useEffect(() => {
    if (is_authed) {
      router.navigate({
        to: redirect,
        // @ts-expect-error
        search: (prev) => ({ redirect: prev?.redirect }),
      });
    }
  });
```

- The above is being used in conjunction with a layout level auth guard

```tsx
import { Outlet, useRouter } from "@tanstack/router";
import { useEffect } from "react";

interface AdminLayoutProps {}

export function AdminLayout({}: AdminLayoutProps) {
  const ls_is_authed = localStorage.getItem("is_authed");
  const is_authed = ls_is_authed === "true";
  const router = useRouter();
  useEffect(() => {
    if (!is_authed) {
      router.navigate({
        to: "/auth",
        search: {
          redirect: "/admin",
        },
      });
    }
  });
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
```
