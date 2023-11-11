import { Outlet } from "@tanstack/react-router";

interface WelcomeLayoutProps {}

export function WelcomeLayout({}: WelcomeLayoutProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Outlet />
    </div>
  );
}
