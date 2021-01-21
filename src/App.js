import "./App.css";
import logo from "./logo192.png";

function Header(props) {
  //console.log(props);
  return (
    <header>
      <h1>{props.name}'s Page Header</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>This is the {props.adj} section of the page</p>
      <img src={logo} alt="react logo" />
      <ul style={{ textAlign: "left" }}>
        {props.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>End of the page, built in year {props.year}</p>
    </footer>
  );
}

const books = ["Designer", "Bumblebee", "Caramel", "Notebooks"];
const bookObjects = books.map((book, i) => ({ id: i, title: book }));

function App() {
  return (
    <div className="App">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */}
      <Header name="Mirza" />
      <Main adj="middle" books={bookObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
