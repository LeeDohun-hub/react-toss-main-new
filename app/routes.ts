import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes';

// TODO: 경로 정의 (https://reactrouter.com/start/framework/routing)
export default [
  // * Pages
  layout('routes/layouts/default-layout.tsx', [
    index('routes/pages/home/route.tsx'),
    route('notice', 'routes/pages/notice/route.tsx'),
    route('notice/:id', 'routes/pages/notice-details/route.tsx'),
  ]),

  // * APIs
  ...prefix('api', [
    route('theme', 'routes/apis/theme.ts'),
    route('language', 'routes/apis/language.ts'),
    route('notice', 'routes/apis/notice.ts'),
  ]),
] satisfies RouteConfig;
