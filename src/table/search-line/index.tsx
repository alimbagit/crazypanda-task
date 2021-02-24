import React from "react";
import { TextField } from "@material-ui/core";

interface ISearchLine {
  searchText: string;
  callbackSearchText: (str: string) => void;
}

/**Поискова строка
 * @param searchText - текст, по которому будет осуществляться поиск
 */
const SearchLine = ({ searchText, callbackSearchText }: ISearchLine) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    callbackSearchText(event.target.value);
  };

  return (
    <TextField
      label="Search"
      value={searchText}
      onChange={handleChange}
      style={{ left: "15px", marginTop: '15px', marginBottom: '15px' }}
    />
  );
};

export default SearchLine;
