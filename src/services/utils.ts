import { ElementTable } from "models";

/**Сорирует список элементов по заданному полю */
export const sortObjects = (
  sortField: string,
  arrayObj: ElementTable[],
  sortDirection: "asc" | "desc" | false
) => {
  if (sortDirection === "asc")
    arrayObj.sort((elemA, elemB) => {
      return elemA[sortField] > elemB[sortField] ? 1 : -1;
    });
  else
    arrayObj.sort((elemA, elemB) => {
      return elemA[sortField] < elemB[sortField] ? 1 : -1;
    });
  return arrayObj;
};

/**Фильтрует массив объектов по азаднному тексту по всем полям*/
export const filterObjects = (filterText: string, arrayObj: ElementTable[]) => {
  return arrayObj.filter((obj) => {
    if (
      Object.values(obj).find(
        (value) => value.toString().indexOf(filterText) !== -1
      )
    )
      return true;
    return false;
  });
};
