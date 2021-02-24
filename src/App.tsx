import React, { useEffect, useState } from "react";
import Table from "./table";
import { loadObjects } from "services";
import { ElementTable } from "models";

const App = () => {
  const [tableElements, setTableElements] = useState<ElementTable[]>([]);
  useEffect(() => {
    loadObjects().then((response) => {
      setTableElements(response);
    });
  }, []);
  return <>{tableElements.length && <Table elements={tableElements} />}</>;
};

export default App;
