
function Student2({data}) {
    console.log(data);
    
  return (
    <div>
        <h1> {data[0].name }</h1>
        <h1> {data[1].name }</h1>
        <h1> {data[2].name }</h1>
    </div>
  )
}

export default Student2