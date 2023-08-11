import Homepage from './Homepage';
import BookingPage from './BookingPage';
import Menu from './LittleLemonMenu';
import Chicago from './Chicago';
import Order from './Order';
import LogIn from './LogIn';
import { Routes, Route} from "react-router-dom";
import { useReducer } from 'react';

function updateTimes(state, action) {
  console.log(action.type)
  if (action.type === 'CHOSEN') {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return (
     state
  );
  }
}


function Main() {
  const initializeTimes = {availableTimes: ['loading']};
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  console.log(state.availableTimes);

    return (
          <main>
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage chooseDate = {() => dispatch({type: "CHOSEN"})} availableTimes = { state.availableTimes }    />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/Chicago" element={<Chicago />}></Route>
                <Route path="/Order" element={<Order />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
            </Routes>
          </main>
    );
    }

    export default Main;