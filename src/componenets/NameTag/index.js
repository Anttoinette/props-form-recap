export default function NameTag( {firstName, lastName, email, favColor, date} ) {

    return (
        <>
        <div>
            <p> First Name: {firstName}</p>
            <p> Last Name: {lastName}</p>
            <p> Email: {email}</p>
            <p> Fav Color: {favColor}</p>
            <p> Date: {date}</p>
        </div>
        </>
    )
}