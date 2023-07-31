import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
import { Link, useParams, useRouter } from "@tanstack/router";

interface ProfileUserProps {}

export function ProfileUser({}: ProfileUserProps) {
  const { id } = useParams();
  const router = useRouter();
  const history = router.history.location.href;
  const route_history = history.split("/");

  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      {/*  bread crumbs example */}
      <BreadCrumbs route_history={route_history} />
      <h2 className="text-5xl font-bold">{`Profile Page for ${id}`}</h2>
      {id && (
        <Link
          to={`/profile/$id/details`}
          params={{ id: id }}
          className="text-3xl font-bold text-accent-content"
          activeProps={{ className: "text-info font-bold" }}
        >
          Details
        </Link>
      )}
    </div>
  );
}
