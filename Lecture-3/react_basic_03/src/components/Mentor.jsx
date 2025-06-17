import Batch1 from "./Batch1";
import Batch2 from "./Batch2";

function Mentor({student1,student2,student3}) {
    let mentor1 = "Anshika";
    let mentor2 = "Samarth";
  return (
    <div>
        <Batch1 mentor1={mentor1}  student1={student1} />
        <Batch2 mentor2={mentor2}  student2={student2}  student3={student3}/>
    </div>
  )
}

export default Mentor