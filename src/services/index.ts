import { ElementTable } from "models";

/**Загружает список постов */
export const loadObjects = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseResult = await response.json();
  return responseResult as ElementTable[];
};