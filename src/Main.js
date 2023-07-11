import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Menu from './LittleLemonMenu';
import Chicago from './Chicago';
import Order from './Order';
import LogIn from './LogIn';
import { Routes, Route} from "react-router-dom";

function Main() { 
    return (
          <main>
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/Chicago" element={<Chicago />}></Route>
                <Route path="/Order" element={<Order />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
            </Routes>
          </main>
    );
    }

    export default Main;