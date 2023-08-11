import BookingForm from "./BookingForm";
function BookingPage(props) { 
    return (
        <>
            <BookingForm availableTimes = { props.availableTimes }/>
        </>
    );
    }

    export default BookingPage;