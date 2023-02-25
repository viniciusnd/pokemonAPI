export default function Form() {
    
    let input = document.getElementById("inputBox")

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input.value);
  }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="inputBox" className="border rounded-xl text-center text-sm uppercase w-full md:w-80 h-10 md:h-10 ml-3" placeholder="Name or number"/>
        </form>
    )
}