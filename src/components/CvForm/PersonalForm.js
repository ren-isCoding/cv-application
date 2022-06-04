import React from "react"
import { preventLetters } from "../helpers"

export default function PersonalForm({ personal, changePersonal, changePhoto }) {
    const { fName, lName, profession, email, phoneNum, desc } = personal

    return (
        <section>
            <h3>Personal Information</h3>
            <div className="inputs">
                <input
                    placeholder="First name"
                    name="fName"
                    maxLength={15}
                    value={fName}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    placeholder="Last Name"
                    name="lName"
                    maxLength={15}
                    value={lName}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    placeholder="Profession"
                    name="profession"
                    maxLength={30}
                    value={profession}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    placeholder="Phone Number"
                    name="phoneNum"
                    maxLength={15}
                    value={phoneNum}
                    onKeyPress={(e) => preventLetters(e)}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    placeholder="Description"
                    name="desc"
                    value={desc}
                    onChange={(e) => changePersonal(e)}
                />
                <input
                    type="file"
                    id="file-upload"
                    name="photo"
                    onClick={(e) => changePhoto(e)}
                    onChange={(e) => changePersonal(e)}
                />
                <label htmlFor="file-upload">Upload your photo</label>
            </div>
        </section>
    )
}
