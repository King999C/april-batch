function Child({handleFn}){
    return(
        <div>
            <h1 onClick={()=>handleFn("samarth vohra")} > I AM CHILD</h1>
        </div>
    )
}

export default Child