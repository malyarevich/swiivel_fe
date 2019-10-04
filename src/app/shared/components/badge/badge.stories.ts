import { BadgeComponent } from './badge.component';

export default {
  title: 'Badge',
};

export const text = () => ({
    moduleMetadata: {
        declarations: [BadgeComponent]
    },
  template: `<app-badge> My Badge </app-badge>`
});
