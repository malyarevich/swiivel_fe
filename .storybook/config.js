import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
configure(require.context('../src/app', true, /\.stories\.ts$/), module);
