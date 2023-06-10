import './App.css';
import BookCard from './components/BookCard/BookCard';
import Navbar from './components/Navbar/Navbar';
import BookList from "./components/BookList/BookList"
import Footer from "./components/Footer/Footer"
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BookCard/> */}
      <main> 
        <BookList />
        <SideMenu/>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
