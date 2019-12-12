import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ButtonComponent } from '@app/shared/buttons/button/button.component';
import figmaDecorator from 'storybook-addon-figma'

storiesOf('Elements|Buttons', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .addDecorator(
    figmaDecorator({
      embedHost: 'localhost',
      url: 'https://www.figma.com/file/RTfgqP4XAlyiNs0CIypGWhxF/Edminify-Design-Components-Library?node-id=86%3A0'
    })
  )
  .add('Huge', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
  .add('Default', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
  .add('Middle', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
  .add('Small', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
  .add('Icon', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
  .add('Plus', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
