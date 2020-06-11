const routes = [
  {
    path: '/',
    name: 'courses',
    component: () => import(/* webpackChunkName: "courses" */ '@/views/Courses.vue'),
  },
  {
    path: '/course/:repo',
    name: 'course',
    component: () => import(/* webpackChunkName: "courses" */ '@/views/Course.vue'),
  },
  {
    path: '/course/:repo/lesson/:order',
    name: 'lesson',
    component: () => import(/* webpackChunkName: "courses" */ '@/views/Lesson.vue'),
  },
];

export default routes;
