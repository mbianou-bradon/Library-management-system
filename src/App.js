import './App.css';
import BookCard from './components/BookCard/BookCard';
import Navbar from './components/Navbar/Navbar';
import BookList from "./components/BookList/BookList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BookCard/> */}
      <BookList />
      <Footer />
    </div>
  );
}

export default App;
