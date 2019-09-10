import { Exclude, Expose, plainToClass, Transform, Type} from 'class-transformer';

@Exclude()
export class Field {
  @Expose() name: string;
  @Expose() mapped: string;
  @Expose() type: number;
  @Expose({name: 'fields', toClassOnly: true})
  @Transform((childrenTags) => {
    if (childrenTags) {
      return childrenTags.map(child => plainToClass(FieldClass, child));
    }
    return childrenTags;
  }, {toClassOnly: true})
  @Type(() => FieldClass)
  fields: Array<Field> = [];

}

export const FieldClass = Field;
