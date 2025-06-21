function Events(){
    function handleClick(){
        console.log("heyy i am clicked");
    }
    function handleClick2(a,b,c){
        console.log("heyy i am clicked 2",a,b,c);
    }
    return(
        <div>
            <h1>I am events</h1>
            <button onClick={handleClick} >Click me!!</button>
            <button onClick={ ()=>handleClick2(10,20,30) } >Click me 2!!</button>
        </div>
    )
}

export default Events;