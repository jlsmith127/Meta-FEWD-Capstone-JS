import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Specials from './Specials';
import Chicago from './Chicago';
import { Routes, Route} from "react-router-dom";

function Main() { 
    return (
          <main>
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
                <Route path="/Specials" element={<Specials />}></Route>
                <Route path="/Chicago" element={<Chicago />}></Route>
            </Routes>
          </main>
    );
    }

    export default Main;