import { calculateBackSteps } from "@/state/utils/helpers";
import { Link } from "@tanstack/router";

interface BreadCrumbsProps {
route_history: string[];
}

export function BreadCrumbs({route_history}:BreadCrumbsProps){
return (
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
);
}
