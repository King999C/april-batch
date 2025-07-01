import { useMemo, useState } from "react"
function UseMemo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleChange(e){
        setInp(e.target.value)
    }

    const sum = useMemo( function(){
        let ans = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop ran");
            ans+=i;
        }
        return ans;
    }, [inp] )
    
  return (
    <div>
        <input onChange={handleChange} type="number" value={inp} /> 
        <h1>Sum: {sum} </h1>
        <button onClick={()=>setCount(count+1)} >INC- {count}</button>
    </div>
  )
}
export default UseMemo