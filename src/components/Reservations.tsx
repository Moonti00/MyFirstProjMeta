import { useEffect, useState } from "react";
import "./Res.css";



function ConfirmedBooking ({dataArr, setSubmit}) {
    // this component is for showing the confirmation of the booking after submit the form
    // if the date and time is already used then show the error message
    // if the date and time is not used then show the confirmation message
    if (dataArr[dataArr.length - 1].errorSubmitData) {
        return (
            <div className="contConfirmedBooking">
                <div className="confirmedBooking errorCard">
                    <h3>Sorry, your reservation could not be completed.</h3>
                    <p>The date and time you selected are already taken. Please choose a different date or time for your reservation.</p>
                    <button className="button" onClick={() => setSubmit(false)}>OK</button>
                </div>
            </div>
        )}else {
    return (
        <div className="contConfirmedBooking">
            <div className="confirmedBooking">
                <h3>Thank you for your reservation!</h3>
                <p>We have received your reservation for {dataArr[dataArr.length - 1].firstNameData} {dataArr[dataArr.length - 1].lastNameData} on {dataArr[dataArr.length - 1].dateData} at {dataArr[dataArr.length - 1].timeData} for {dataArr[dataArr.length - 1].guestsData} guests for a {dataArr[dataArr.length - 1].occasionData}.</p>
                <button className="button" onClick={() => setSubmit(false)}>Booking confirmation</button>
            </div>
        </div>
    )
        }
}

function Result({dataArr}) {
// this component is for showing the result of the booking after submit the form and if the date and time is not already used
    const data = dataArr.map((el) => {
        if (el.errorSubmitData) {
            return (<>{null}</>)
        }else {
        return(
            <div key={Date.now()} className="result">
                <h3>Your Reservation</h3>
                <hr />
                <p><span>Name:</span> {el.firstNameData} {el.lastNameData}</p>
                <p><span>Date:</span> {el.dateData}</p>
                <p><span>Time:</span> {el.timeData}</p>
                <p><span>Guests:</span> {el.guestsData}</p>
                <p><span>Occasion:</span> {el.occasionData}</p>
            </div>
    )
}})
    return (
    <div className="contResult">
        {data}
    </div>
    )
}




function BookingPage() {

    // states for the form inputs
    // Start
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("birthday");
    // End
    const [disabled, setDisabled] = useState(false); // state for button submit to disabled

    const [arrData, setArrData] = useState([]); // sate for Data coming from input
    const [errorSubmit, setErrorSubmit] = useState(false); // state for error coming from after sumbit the form when date and time already used


    const [submit, setSubmit] = useState(false); // state for success submit form and show the confirmation message

    //  is not success when choose the same date and time already used
    // Start
    const [currentMode, setCurrentMode] = useState(false);
    const dateNow =  Date.now();
    const dateinForm = Date.parse(date);
useEffect(() => {
    if (dateinForm < dateNow) {
        setCurrentMode(true);
    }else {
        setCurrentMode(false);
    }
}, [date]);
    // End

    // button when is not disabled
    // Start
useEffect(() => {
    if (firstName && lastName && phone && date && time && guests) {
        setDisabled(false);
    } else {
        setDisabled(true);
    }
}, [firstName, lastName, phone, date, time, guests]);
    // End

    // date and time is already used so error state is true
    // Start
useEffect(() => {
    const theSameDateAndTime = arrData.some((el) => el.dateData === date && el.timeData === time);
    if (theSameDateAndTime) {
        setErrorSubmit(true);
    } else {
        setErrorSubmit(false);
    }
}, [arrData, date, time]);
    // End


        return (
        <div className="contForm">
            <h1>Book Your Reservations</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                setArrData([...arrData,{
                    firstNameData: firstName,
                    lastNameData: lastName,
                    phoneData: phone,
                    dateData: date,
                    timeData: time,
                     guestsData: guests,
                     occasionData: occasion,
                     errorSubmitData: errorSubmit
                }]);
                setFirstName("");
                setLastName("");
                setPhone("");
                setDate("");
                setTime("17:00");
                setGuests("");
                setOccasion("birthday");
                setSubmit(true);
            }}>
                <label htmlFor="firstName">First Name<span style={{color: "red"}}>*</span>:</label>
                <input aria-label="First Name" type="text" id="firstName" name="firstName" required onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <label aria-label="Last Name" htmlFor="lastName">Last Name<span style={{color: "red"}}>*</span>:</label>
                <input aria-label="Last Name" type="text" id="lastName" name="lastName" required onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <br />
                <label htmlFor="phone">Phone<span style={{color: "red"}}>*</span>:</label>
                <input aria-label="Phone" type="tel" id="phone" name="phone" required onChange={(e) => setPhone(e.target.value)} value={phone}/>
                <br />
                <label htmlFor="date">Choose Date<span style={{color: "red"}}>*</span>:</label>
                <input aria-label="Date" type="date" id="date" name="date" required onChange={(e) => setDate(e.target.value)} value={date}/>
              {currentMode ? <p style={{color:"red"}}>Date must be today or in the future.</p> : null}
                {errorSubmit ? <p style={{color:"red"}}>This date and time are already taken.</p> : null}

                <br />
                <label htmlFor="time">Choose Time<span style={{color: "red"}}>*</span>:</label>
                   <select aria-label="Time" id="time " onChange={(e) => setTime(e.target.value)} value={time}>
                         <option value={"17:00"}>17:00</option>
                         <option value={"18:00"}>18:00</option>
                         <option value={"19:00"}>19:00</option>
                         <option value={"20:00"}>20:00</option>
                         <option value={"21:00"}>21:00</option>
                         <option value={"22:00"}>22:00</option>
                    </select>
                <br />
                <label htmlFor="guests">Number of Guests<span style={{color: "red"}}>*</span>:</label>
                <input aria-label="Number of Guests" type="number" id="guests" name="guests" min="1" max="10" required onChange={(e) => setGuests(e.target.value)} value={guests}/>
                <br />
                <label htmlFor="occasion">Occasion:</label>
                <select aria-label="Occasion" id="occasion" name="occasion" onChange={(e) => setOccasion(e.target.value)} value={occasion}>
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <br />
                <button aria-label="Create Reservation" type="submit" className="buttonForm" disabled={disabled || currentMode}>
                    Create Reservation
                </button>
            </form>

            {submit ? <ConfirmedBooking dataArr={arrData} setSubmit={setSubmit} /> : null}
            {arrData.length > 0 &&  <Result dataArr={arrData} /> }

        </div>
    )

}

export default BookingPage;