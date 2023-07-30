import { useParams, useRouter, Link } from "@tanstack/router";

interface ProfileUserProps {}

export function ProfileUser({}: ProfileUserProps) {
  const router = useRouter();
  const { id } = useParams();
  const history = router.history.location.href;
  const route_history = history.split("/");

  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      {/*  bread crumbs example */}
      <div className="text-sm breadcrumbs absolute top-12 right-5">
        <ul>
          {route_history.map((item, index) => {
            const back_steps = calculateBackSteps(index);
            return (
              <li key={index}>
                {/* @ts-expect-error */}
                <Link to={back_steps}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <h2 className="text-xl">{`Profile Page for ${id}`}</h2>
    </div>
  );
}

function calculateBackSteps(index: number) {
  const one_back_step = "../";
  const back_steps = one_back_step.repeat(index);
  return back_steps;
}
