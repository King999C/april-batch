import Mentor from "./Mentor"
import Mentor2 from "./Mentor2"
import Student2 from "./Student2"

function Internshala2() {

    let data = [
        {name:"mohit", mentor:"Anshika"},
        {name:"ankur", mentor:"Samarth"},
        {name:"chetan", mentor:"Samarth"},
    ]

  return (
    <div>
        <Student2 data={data}/>
        <Mentor2 data={data} />
    </div>
  )
}

export default Internshala2