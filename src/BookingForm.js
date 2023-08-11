import { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const renderTimes=props.availableTimes.map((time, index) =>
    <option key={index}>{time}</option>
    );
    console.log(props.chooseDate);
    return (
            <article>
            <h1 id="res-h1">Make A Reservation</h1>
            <form className="reservations">
                <label htmlFor="res-date">Choose Date:</label>
                <input type="date" id="res-date" onChange={() => {setDate(document.getElementById("res-date").value); props.chooseDate}} />
                <label htmlFor="res-time">Choose Time:</label>
                <select id="res-time" onChange={() => setTime(document.getElementById("res-time").value)}>
                    {renderTimes}
                </select>
                <label htmlFor="guests">Number Of Guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={() => setGuests(document.getElementById("guests").value)} />
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" onChange={() => setOccasion(document.getElementById("occasion").value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input id="res-btn" type="submit" value="Make Your Reservation"/>
            </form>
            </article>
    );
    }

    export default BookingForm;