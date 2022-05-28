import React from "react"

export default function PersonalForm({ changePersonal }) {
    const preventLetters = (e) => {
        if (e.which < 48 || e.which > 57 || e.target.value.length > 15) {
            e.preventDefault()
        }
    }
    return (
        <section>
            <h3>Personal Information</h3>
            <div className="inputs" onChange={(e) => changePersonal(e)}>
                <input type="text" placeholder="First name" name="fName" />
                <input placeholder="Last Name" name="lName" />
                <input placeholder="Profession" name="profession" />
                <input placeholder="Email" name="email" />
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNum"
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input placeholder="Description" name="desc" />
                <button className="add-btn">Upload Photo</button>
            </div>
        </section>
    )
}
