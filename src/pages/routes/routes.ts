import { adminRoute } from "../admin/config";
import { authRoute } from "../auth/config";
import { homeRoute } from "../home/config";
import { profileRoute } from "../profile/config";

// ADD NEW IMPORT HERE

// START
export const routes = [homeRoute, profileRoute, authRoute, adminRoute];
// END
