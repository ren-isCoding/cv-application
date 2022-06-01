import React from "react"

export default function PersonalForm({ personal, changePersonal, changePhoto }) {
    const preventLetters = (e) => {
        if (e.which < 48 || e.which > 57 || e.target.value.length > 15) {
            e.preventDefault()
        }
    }

    const { fName, lName, profession, email, phoneNum, desc } = personal
    return (
        <section>
            <h3>Personal Information</h3>
            <div className="inputs" onChange={(e) => changePersonal(e)}>
                <input
                    type="text"
                    placeholder="First name"
                    name="fName"
                    defaultValue={fName}
                />
                <input placeholder="Last Name" name="lName" defaultValue={lName} />
                <input
                    placeholder="Profession"
                    name="profession"
                    defaultValue={profession}
                />
                <input placeholder="Email" name="email" defaultValue={email} />
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNum"
                    defaultValue={phoneNum}
                    onKeyPress={(e) => preventLetters(e)}
                />
                <input placeholder="Description" name="desc" defaultValue={desc} />

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
