import importComponent from './AsyncComponent';

export const Admin = importComponent(() =>
  import('../components/admin/Admin').then((module) => module.default)
);
