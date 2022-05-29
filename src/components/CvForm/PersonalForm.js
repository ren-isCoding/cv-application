import React from "react"

export default function PersonalForm({ changePersonal, changePhoto }) {
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

                <input
                    type="file"
                    id="file-upload"
                    name="photo"
                    onClick={(e) => changePhoto(e)}
                />
                <label htmlFor="file-upload">Upload your photo</label>
            </div>
        </section>
    )
}
