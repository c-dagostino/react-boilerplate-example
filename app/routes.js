// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas.js'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
          path: '/features',
          name: 'features',
          getComponent(nextState, cb) {
              import
              ('containers/FeaturePage')
                  .then(loadModule(cb))
                  .catch(errorLoading);
          },
      },
      {
          path: '/customPager',
          name: 'customPager',
          getComponent(nextState, cb) {
              import('containers/CustomPager')
                  .then(loadModule(cb))
                  .catch(errorLoading);
          },
    },
      {
          path: '/courses',
          name: 'courses',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/CoursePage/sagas.js'),
              import('containers/CoursePage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },
      {
          path: '/coursesGrid',
          name: 'coursesGrid',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/CourseGridPage/sagas.js'),
              import('containers/CourseGridPage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },

      {
          path: '/manageCourse',
          name: 'manageCourse',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/ManageCoursePage/sagas.js'),
              import('containers/ManageCoursePage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },
      {
          path: '/manageCourse/:id',
          name: 'manageCourse',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/ManageCoursePage/sagas.js'),
              import('containers/ManageCoursePage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },
      {
          path: '/manageCourseGrid',
          name: 'manageCourseGrid',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/CourseGridPage/sagas.js'),
              import('containers/ManageCourseGridPage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },
      {
          path: '/manageCourseGrid/:id',
          name: 'manageCourseGrid',
          getComponent(nextState, cb) {
              const importModules = Promise.all([
              import('containers/CourseGridPage/sagas.js'),
              import('containers/ManageCourseGridPage'),
          ]);

              const renderRoute = loadModule(cb);

              importModules.then(([sagas, component]) => {
                  injectSagas(sagas.default);

                  renderRoute(component);
              });

              importModules.catch(errorLoading);
          },
      },

      {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
