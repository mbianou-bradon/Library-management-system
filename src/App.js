import './App.css';
import BookCard from './components/BookCard/BookCard';
import Navbar from './components/Navbar/Navbar';
import BookList from "./components/BookList/BookList"
import Footer from "./components/Footer/Footer"
import SideMenu from './components/sideMenu/SideMenu';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import StudentTable from './components/StudentTable/StudentTable';
import BookDetails from './components/BookDetails/BookDetails';

const MyApp = () => {
  return(
    <div className="App">
      <Navbar/>
      <main> 
        <Outlet/>
        <SideMenu/>
      </main>
      
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  [
    {
      element : <MyApp/>,
      // errorElement : <Error/>,
      children: [
        { path : "/", element : <BookList />},
        { path : "/book/:borrowedbook", element : <BookList/>},
        { path : "/addBook", element : <BookList/>},
        { path : "/bookDetail", element : <BookDetails/>},
        { path: "/allstudents", element: <StudentTable />},
        { path: "/sanctionstudent", element: <StudentTable />},
        { path: "/dismissedstudent", element: <StudentTable />}
      ]
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
