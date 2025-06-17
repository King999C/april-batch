import Age from "./Age";
import FirstName from "./FirstName";
import Profession from "./Profession";

function Samarth(){
    let age = 21;
    let firstName = "sam"
    let profession = "SDE"

    return(
        <div>
            <Age umar={age} />
            <FirstName naam={firstName} />
            <Profession kaam={profession}/>
        </div>
    )
}

export default Samarth;