import { create } from '@storybook/theming/create';
import { configure, addParameters } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
configure(require.context('../src/app', true, /\.stories\.ts$/), module);
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Components',
      brandUrl: 'http://red.dev.codeblue.ventures',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    selectedPanel: 'notes'
  }
})
