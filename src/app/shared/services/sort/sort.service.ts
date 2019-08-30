import { Injectable } from '@angular/core';

@Injectable()
export class SortService {
  constructor() { }

  static nameDescCompare(referenceItem: any, compareItem: any): number {
    return referenceItem.name.toLowerCase().localeCompare(compareItem.name.toLowerCase(), 'en', {
      numeric: true,
      sensitivity: 'base'
    });
  }

  static nameAscCompare(referenceItem: any, compareItem: any): number {
    return compareItem.name.toLowerCase().localeCompare(referenceItem.name.toLowerCase(), 'en', {
      numeric: true,
      sensitivity: 'base'
    });
  }

  getComplexSort(
    sortingArray: Array<any>,
    event: { order: string, id: string},
    dataType: string,
    dataTypeProperty: string,
    idProp: string ): Array<any> {

    const typeArray = [];
    const returnArray = [];

    sortingArray.map((item) => {
      if (item[dataTypeProperty] === dataType) {
        typeArray.push(item);
      }
    });

    if (event.order === 'DESC') {
      typeArray.sort((referenceItem, compareItem) => {
        if (event.id  === 'name') {
          return SortService.nameDescCompare(referenceItem, compareItem);
        } else {
          return referenceItem[event.id] > compareItem[event.id] ? 1 : -1;
        }
      });
    } else if (event.order === 'ASC') {
      typeArray.sort((referenceItem, compareItem) => {
        if (event.id === 'name') {
          return SortService.nameAscCompare(referenceItem, compareItem);
        } else {
          return referenceItem[event.id] < compareItem[event.id] ? 1 : -1;
        }
      });
    }

    typeArray.map((sortItem) => {
      returnArray.push(sortItem);
      sortingArray.map((item) => {
        if (item[idProp] === sortItem[idProp] && item[dataTypeProperty] !== dataType) {
          returnArray.push(item);
        }
      });
    });

    return returnArray;
  }
}
