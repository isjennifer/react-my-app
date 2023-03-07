import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  { path: "/", element: <Home />, },
  // :id 라고 하면 id 라는 이름의 변수를 url에 표시해달라는 의미임.
  // 그 변수를 얻기 위해서 해당 element(Detail 페이지)에서 useParams를 사용하면 됨.
  { path: "/movie/:id", element: <Detail />, },
]);

export default App;

