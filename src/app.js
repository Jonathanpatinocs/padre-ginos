const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some pizza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "hot dogs and stuff",
    }),
    React.createElement(Pizza, {
      name: "Hawaain",
      description: "yes",
    }),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

