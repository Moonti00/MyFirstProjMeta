import "./Res.css";


function Result() {
    return (
        <div className="result">
        <h3>Your Reservation</h3>
        <hr />
        <p><span>Name:</span> Moonti Magdab</p>
        <p><span>Date:</span> 2026-9-6</p>
        <p><span>Time:</span> 17:30</p>
        <p><span>Guests:</span> 3</p>
        <p><span>Occasion:</span> Birthday</p>
        </div>
    )
}

function Reservations() {
    return (
        <div className="contForm">
            <h1>Book Your Reservations</h1>
            <form>
                <label htmlFor="firstName">First Name<span style={{color: "red"}}>*</span>:</label>
                <input type="text" id="firstName" name="firstName" required />
                <label htmlFor="lastName">Last Name<span style={{color: "red"}}>*</span>:</label>
                <input type="text" id="lastName" name="lastName" required />
                <br />
                <label htmlFor="phone">Phone<span style={{color: "red"}}>*</span>:</label>
                <input type="tel" id="phone" name="phone" required />
                <br />
                <label htmlFor="date">Date<span style={{color: "red"}}>*</span>:</label>
                <input type="date" id="date" name="date" required />
                <br />
                <label htmlFor="time">Time<span style={{color: "red"}}>*</span>:</label>
                <input type="time" id="time" name="time" required />
                <br />
                <label htmlFor="guests">Number of Guests<span style={{color: "red"}}>*</span>:</label>
                <input type="number" id="guests" name="guests" min="1" max="20" required />
                <br />
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" name="occasion">
                    <option value="birthday">Birthday</option>
                    <option value="engagement">Engagement</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <br />
                <button type="submit" className="buttonForm">Create Reservation</button>
            </form>
            <div className="contResult">
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
            </div>
        </div>
    )

}

export default Reservations;