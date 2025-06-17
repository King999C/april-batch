
function Batch22({data}) {
  return (
    <div>
        <div>
            <h1>Mentor: {data[1].mentor}</h1>
            <h1>Student: {data[1].name}</h1>
        </div>
        <div>
            <h1>Mentor: {data[2].mentor}</h1>
            <h1>Student: {data[2].name}</h1>
        </div>
    </div>
  )
}

export default Batch22