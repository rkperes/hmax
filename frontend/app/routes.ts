import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/marketing.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
