import { adminRoute } from "../admin/AdminLayout";
import { authRoute } from "../auth/AuthLayout";
import { homeRoute } from "../home/config";
import { postsRoute } from "../posts/PostLayout";
import { welcomeRoute } from "@/pages/welcome/config";
// ADD NEW IMPORT HERE

// START
export const routes = [welcomeRoute, homeRoute, postsRoute,adminRoute,authRoute];
// END
