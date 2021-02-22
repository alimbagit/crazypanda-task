import { IElementTable } from 'models'

/**Сорирует список элементов по заданному полю */
export const sortObjects = (sortField: string, arrayObj: IElementTable[], sortFlag: 'asc' | 'desc' | false) => {
  if (sortFlag) arrayObj.sort((elemA, elemB) => { return elemA[sortField] > elemB[sortField] ? 1 : -1 })
  else arrayObj.sort((elemA, elemB) => { return elemA[sortField] < elemB[sortField] ? 1 : -1 })
  return arrayObj;
}