export const dividersColor: Colors[] = [
  {
    name: 'black',
    colorAttr: '#000000'
  },
  {
    name: 'blue',
    colorAttr: '#1C39BB'
  },
  {
    name: 'red',
    colorAttr: '#FF0000'
  },
  {
    name: 'yellow',
    colorAttr: '#FFFF00'
  },
  {
    name: 'green',
    colorAttr: '#7FFF00'

  }
];


export const dividerStyle = [
  {
    name: 'Solid _________________  ',
    type: 'solid'
  },
  {
    name: 'Dashes _ _ _ _ _ _ _ _ _ _ ',
    type: 'dashes'
  },
  {
    name: 'Dotted . . . . . . . . . . . . . . . . ',
    type: 'dotted'
  },
  {
    name: 'Dash, Dot _ . _ . _ . _ . _ . ',
    type: 'dashDot'
  },
  {
    name: 'Dash, Dot, Dot_ . . _ . . _   ',
    type: 'dashDotDot'
  },


];


export interface Colors {
 name: string;
 colorAttr: string;
}
