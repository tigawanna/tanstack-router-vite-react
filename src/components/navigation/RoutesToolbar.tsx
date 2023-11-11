import { Link, useRouter, useRouterState } from "@tanstack/react-router";

interface RoutesToolbarProps {

}

export function RoutesToolbar({}:RoutesToolbarProps){
  const {routeTree} = useRouter()
return (
  <div className="flex flex-col md:flex-row gap-3">
    <Link to="/" activeProps={{ className: "text-info font-bold" }}>
      Home
    </Link>
    <Link to="/posts" activeProps={{ className: "text-info font-bold" }}>
      posts
    </Link>

    <Link to="/admin" activeProps={{ className: "text-info font-bold" }}>
      admin
    </Link>
  </div>
);
}
