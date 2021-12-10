// Import components from react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import user defined components
import About from "./components/About";
import MenuBar from "./components/MenuBar";
import AddTodo from "./components/AddTodo";
import Menu from "./components/Menu";
import DisplayTodos from "./components/DisplayTodos";
import NotFound from "./components/NotFound";

// Main component
const App = () => {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/about">
          <Menu />
          <About />
        </Route>
        <Route exact path="/">
          <Menu />
          <DisplayTodos filter="" />
        </Route>
        <Route path="/add">
          <Menu />
          <AddTodo />
        </Route>
        <Route path="/pending">
          <Menu />
          <DisplayTodos filter="pending" />
        </Route>
        <Route path="/done">
          <Menu />
          <DisplayTodos filter="done" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
