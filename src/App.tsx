import React from "react";
import { defaultTheme } from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import Table from "components/table";


const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ReduxProvider store={store}>
        <Table />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
