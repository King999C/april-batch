
function Search({restArr, setAllRestaurantArr}) {

    function handleSearch(searchedText){
        // console.log(searchedText, "searchedText");
        let filteredRestArr = restArr.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()) )
        setAllRestaurantArr(filteredRestArr)
    }

  return (
    <input onChange={(e)=>handleSearch(e.target.value)} className="border p-2 ml-20 rounded w-1/3" type="text" placeholder="Search Restaurant here..." />
  )
}

export default Search