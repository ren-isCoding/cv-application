import React from "react"

export default function PersonalForm({ onChange }) {
    return (
        <section>
            <h3>Personal Information</h3>
            <div className="inputs" onChange={(e) => onChange(e)}>
                <input type="text" placeholder="First name" name="fName" />
                <input placeholder="Last Name" name="lName" />
                <input placeholder="Profession" name="profession" />
                <input placeholder="Email" name="email" />
                <input placeholder="Phone Number" name="phoneNum" />
                <input placeholder="Description" name="desc" />
                <button className="add-btn">Upload Photo</button>
            </div>
        </section>
    )
}
