export const childrenCommon = [
  {
    title: "Welcome",
    icon: "home",
    // title: 'Timer',
    // icon: 'schedule',
    path: "/",
    component: () => import("pages/IndexPage.vue"),
  },
  {
    title: "Job",
    icon: "work",
    path: "/job/:id",
    component: () => import("pages/JobPage.vue"),
  },
];

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      // { path: 'about', component: () => import('pages/About.vue') }
      ...childrenCommon,
      // ...childrenDebug,
      // ...childrenWizard,
      // ...childrenDev
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
