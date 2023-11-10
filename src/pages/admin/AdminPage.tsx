import { useRouter } from "@tanstack/react-router";

interface AdminPageProps {}

export function AdminPage({}: AdminPageProps) {
  const router = useRouter();

  function logoutUser() {
    localStorage.removeItem("is_authed");
  
  }
  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center gap-10 ">
      <h2 className="text-6xl">Admin Only Page</h2>

      <button className="btn btn-outline" onClick={logoutUser}>
        Log out
      </button>
    </div>
  );
}
