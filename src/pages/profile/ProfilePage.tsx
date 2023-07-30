import { Link } from "@tanstack/router";

interface ProfilePageProps {}

export function ProfilePage({}: ProfilePageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      <h2 className="text-6xl">Profile Page</h2>

      <Link to="/profile/$id" params={{ id: "marko" }}>
        Marko Profile
      </Link>
      <Link to="/profile/$id" params={{ id: "polo" }}>
        Polo Profile
      </Link>
    </div>
  );
}
