const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!")
    );
};

ReactDom.render(
    React.createElement(App),
    document.getElementById("root")
);