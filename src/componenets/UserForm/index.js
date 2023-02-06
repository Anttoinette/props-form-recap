import { useState } from "react"

export default function UserForm () {
//  const handleFirstName = (e) => {
//         setFirstName(e.target.value)
//     }
        const [firstName, setFirstName] = useState()
        const [lastName, setLastName] = useState()
        const [email, setEmail] = useState()
        const [favColor, setFavColor] = useState()
        const [date, setDate] = useState()

    const handleFirstName = e => (setFirstName(e.target.value))
    const handlelastName = e => (setLastName(e.target.value))
    const handleEmail = e => (setEmail(e.target.value))
    const handleFavColor = e => (setFavColor(e.target.value))
    const handleDate = e => (setDate(e.target.value))

    const handleForm = (e) => {
    e.preventDefault();

    alert(`Your first and last name is ${firstName} ${lastName}. Your email is${email}. Your favorite color is ${favColor}. Todays date is ${date}.`)

    console.log("firstName: ", firstName);
    console.log("lasttName: ", lastName);
    console.log("email: ", email);
    console.log("favColor: ", favColor);
    console.log("date: ", date);
    }


    return (
            <>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onClick={handleFirstName} />
                    </div> 
                    <div> 
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                        name={lastName}
                        value={handlelastName}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                        name={email}
                        value={handleEmail}/>
                    </div>
                    <div>
                        <label htmlFor="color">FavColor</label>
                        <input type="color"
                        name="color"
                        value={favColor}
                        onChange={handleFavColor}/>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date"
                        name="date"
                        value={date}
                        onChange={handleDate}/>
                    </div>
                    <input type="submit" value="submit<3" />
                </form>
            </>
    )
    }