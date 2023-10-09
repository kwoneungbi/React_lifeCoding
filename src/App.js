// import logo from "./logo.svg";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import "./App.css";

function App() {
  const topices = [
    { id: 1, title: "html", body: "html" },
    { id: 2, title: "css", body: "css" },
    { id: 3, title: "js", body: "js" },
  ];
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("Header");
        }}
      ></Header>
      <Nav
        topices={topices}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
