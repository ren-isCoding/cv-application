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
      id: "education1",
      school: "Technical Institute",
      schoolCity: "Naples",
      degree: "High school diploma",
      schoolStart: "2015",
      schoolEnd: "2020",
    },
    {
      id: "education2",
      school: "School/Uni Name",
      schoolCity: "City",
      degree: "Degree",
      schoolStart: "From",
      schoolEnd: "To",
    },
  ],

  experience: [
    {
      id: "experience1",
      job: "Junior Web Developer",
      company: "Facebook",
      jobCity: "Naples",
      jobStart: "2020",
      jobEnd: "2025",
    },
    {
      id: "experience2",
      job: "Job Position",
      company: "Company",
      jobCity: "City",
      jobStart: "From",
      jobEnd: "To",
    },
  ],

  skills: [
    { id: "skill1", name: "HTML" },
    { id: "skill2", name: "CSS" },
    { id: "skill3", name: "JavaScript" },
    { id: "skill4", name: "React" },
  ],
}

export default CvExample
