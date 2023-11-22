function Button (props){
   const {title, handleClick} = props
  
   

   return(
    <button onClick={handleClick} className="border border-solid border-color-white  bg-indigo-600 rounded-lg text-lg font-semibold text-white px-4 py-2 shadow-md">
   {title}
        </button>
   ) 
}
export default Button