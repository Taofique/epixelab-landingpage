import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

import Services from "../components/Home/Services";

export default [
  layout("../layouts/MainLayout.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("services", "../components/Home/Services.tsx"),
  ]),
] satisfies RouteConfig;
