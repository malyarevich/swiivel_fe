import { storiesOf, moduleMetadata } from '@storybook/angular';


storiesOf('Pages|Rules/Colors', module)
  .add('Colors logic', () => {
    return {
      template: `Colors logic here`
    }
  });

storiesOf('Pages|Rules/Text/Body', module)
  .add('Bold', () => {
    return {
      template: `Body bold`,
    }
  })
  .add('Regular', () => {
    return {
      template: `Body regular`
    }
  })
storiesOf('Pages|Rules/Text/Label', module)  
  .add('Bold', () => {
    return {
      template: `Label bold`,
    }
  })
  .add('Regular', () => {
    return {
      template: `Label regular`
    }
  })