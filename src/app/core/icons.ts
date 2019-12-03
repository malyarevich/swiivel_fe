import { IconDefinition,  IconPack, IconPathData, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

// import { core } from '@angular/compiler';

export const consent: {
  prefix: IconPrefix,
  iconName: IconName,
  icon: [
    number,
    number,
    string[],
    string,
    IconPathData
  ]
} = {
  prefix: 'far',
  iconName: 'consent' as IconName,
  icon: [
    40,
    40,
    [''],
    "f2bb",
    "M11.4346 39H21.5654C22.3577 39 23 38.3284 23 37.5C23 36.6716 22.3577 36 21.5654 36H11.4346C10.6423 36 10 36.6716 10 37.5C10 38.3284 10.6423 39 11.4346 39Z"
  ]
};

// export const prefix: IconPrefix = 'sw';
export const sw:any = {
  consent: consent,
};