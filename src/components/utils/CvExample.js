import examplePhoto from "../assets/examplePhoto.png"

const CvExample = {
    personalInfo: {
        fName: "Boris",
        lName: "Dakoolcat",
        profession: "Web Developer",
        email: "boris123@gmail.com",
        phoneNum: "123456789",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error labore, sapiente recusandae fuga accusantium laudantium, ratione possimus quisquam ea, fugit obcaecati hic soluta. Omnis illo quos aspernatur rem ab.",
        photo: examplePhoto,
    },

    education: [
        {
            id: "01b9db56-0fac-49a1-aef6-fcd4de5180db",
            school: "Technical Institute",
            schoolCity: "Naples",
            degree: "High school diploma",
            schoolStart: "2015",
            schoolEnd: "2020",
        },
    ],

    experience: [
        {
            id: "97e5bdec-41f2-4e8b-9612-25b710c9adc0",
            job: "Junior Web Developer",
            company: "Facebook",
            jobCity: "Naples",
            jobStart: "2020",
            jobEnd: "2025",
        },
    ],

    skills: [],
}

export default CvExample
