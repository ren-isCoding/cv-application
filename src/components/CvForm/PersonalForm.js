import React from "react"
import { preventLetters } from "../helpers"

export default function PersonalForm({ personal, changePersonal, changePhoto }) {
    const { fName, lName, profession, email, phoneNum, desc } = personal

    return (
        <section>
            <h3>Personal Information</h3>
            <div className="inputs" onChange={(e) => changePersonal(e)}>
                <input
                    type="text"
                    placeholder="First name"
                    name="fName"
                    maxLength={15}
                    defaultValue={fName}
                />
                <input
                    placeholder="Last Name"
                    name="lName"
                    maxLength={15}
                    defaultValue={lName}
                />
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
                    maxLength={15}
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
