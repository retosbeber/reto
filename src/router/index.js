import Vue from 'vue';
import VueRouter from 'vue-router';

// import store from '@/store';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

// // Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // console.log(routeTo, routeFrom);
  next();
  //   /** redirectToLogin
  //    *  Redirects a request to login route
  //    */
  //   function redirectToLogin() {
  //     // Pass the original route to the login component
  //     next({ name: 'login', query: { redirectFrom: routeTo.fullPath } });
  //   }

  //   // If this isn't an initial page load...
  //   /* if (routeFrom.name !== null) {
  //     // Start the route progress bar.
  //     NProgress.start()
  //   } */

  //   // Check if auth is required on this route
  //   // (including nested routes).
  //   const authRequired = routeTo.matched.some((route) => route.meta.authRequired);

  //   // If auth isn't required for the route, just continue.
  //   if (!authRequired) return next();

  //   // If auth is required and the user is logged in...
  //   if (store.getters['auth/loggedIn']) {
  //     // Validate the local user token...
  //     return store.dispatch('auth/validate').then((validUser) => {
  //       // Then continue if the token still represents a valid user,
  //       // otherwise redirect to login.
  //       validUser ? next() : redirectToLogin();
  //     });
  //   }

  //   // If auth is required and the user is NOT currently logged in,
  //   // redirect to login.
  //   redirectToLogin();
});

/* router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done()
              }
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})
*/

/* // When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
}) */

export default router;