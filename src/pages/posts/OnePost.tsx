import { fetchPostById } from "@/state/posts/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Route, useRouter } from "@tanstack/react-router";
import { postsLayout } from "./PostLayout";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

export const onePostRoute = new Route({
  getParentRoute: () => postsLayout,
  path: "$postId",
  beforeLoad: ({ params: { postId } }) => ({
    queryOptions: {
      queryKey: ["posts", { postId }],
      queryFn: () => fetchPostById(postId),
    } as const,
  }),
  load: ({ context: { queryClient, queryOptions } }) => queryClient.ensureQueryData(queryOptions),
  component: ({useRouteContext}) => {
    const { queryOptions } = useRouteContext();
    const router = useRouter();
    const history = router.history.location.href;
    const route_history = history.split("/");
    
    const postQuery = useSuspenseQuery({
      ...queryOptions,
      staleTime: 10 * 1000,
    });

    const post = postQuery.data;


    return (
      <div className="w-full h-full flex items-center justify-center">
        <BreadCrumbs route_history={route_history} />
        <div className="space-y-2 p-5">
          <h4 className="text-xl font-bold underline">{post.title}</h4>
          <div className="text-sm">{post.body}</div>
        </div>
      </div>
    );
  },
});
