import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
import { useParams, useRouter} from "@tanstack/router";

interface ProfileUserProps {}

export function ProfileUser({}: ProfileUserProps) {
  const { id } = useParams();
  const router = useRouter();
  const history = router.history.location.href;
  const route_history = history.split("/");

  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      {/*  bread crumbs example */}
      <BreadCrumbs route_history={route_history}/>

      <h2 className="text-xl">{`Profile Page for ${id}`}</h2>
    </div>
  );
}


