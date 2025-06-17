import Mentor from "./Mentor"
import Students from "./Students"

function Internshala() {
    let student1 = "Chetan"
    let student2 = "Ankur"
    let student3 = "Mohit"
  return (
    <div>
        <Students student1={student1} student2={student2} student3={student3} />
        <Mentor student1={student1} student2={student2} student3={student3} />
    </div>
  )
}

export default Internshala