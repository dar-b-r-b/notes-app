import React from "react";
import { Provider } from "./components/ui/provider";

import "./App.css";
import { Notes } from "./features/notes/Notes";

function App() {
  return (
    <Provider>
      <Notes />
    </Provider>
  );
}

export default App;
