import { storybookPlugin } from '@web/dev-server-storybook';

export default {
  nodeResolve: true,
  // type can be 'web-components' or 'preact'
  plugins: [storybookPlugin({ type: 'web-components' })],
};
