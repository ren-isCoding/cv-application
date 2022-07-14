import defaultPhoto from "../assets/defaultPhoto.png"
import { v4 as uuidv4 } from "uuid"

const CvEmpty = {
  personalInfo: {
    fName: "",
    lName: "",
    profession: "",
    email: "",
    phoneNum: "",
    desc: "",
    photo: defaultPhoto,
  },

  education: [],

  experience: [],

  skills: [],
}

export default CvEmpty
