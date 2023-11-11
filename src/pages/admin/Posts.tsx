import { fetchPosts } from "@/state/posts/query";
import { Link, Route } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { postsLayout } from "./PostLayout";
import { onePostRoute } from "./OnePost";

export const postsIndexRoute = new Route({
  getParentRoute: () => postsLayout,
  path: "/",
  beforeLoad: () => ({
    queryOpts: {
      queryKey: ["posts"],
      queryFn: () => fetchPosts(),
    } as const,
  }),
  load: ({ context: { queryClient, queryOpts } }) => {
    return queryClient.ensureQueryData(queryOpts);
  },
  component: ({ useRouteContext }) => {
    const { queryOpts } = useRouteContext();

    const postsQuery = useSuspenseQuery({
      ...queryOpts,
      staleTime: 10 * 1000,
    });

    const posts = postsQuery.data;
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ul className="list-disc pl-4 ">
          {posts?.map((post) => {
            return (
              <li key={post.id} className="whitespace-nowrap">
                <Link
                  to={onePostRoute.to}
                  params={{ postId: post.id }}
                  className="block py-1 text-blue-800 hover:text-blue-600"
                  activeProps={{ className: "text-black font-bold" }}>
                  <div>{post.title.substring(0, 20)}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
});
