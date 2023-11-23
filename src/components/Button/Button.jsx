function Button({ title, handleClick, type }) {
   return(
    <button type={type} onClick={event => handleClick(event)} className="border border-solid border-color-white  bg-indigo-600 rounded-lg text-lg font-semibold text-white px-4 py-2 shadow-md">
   {title}
        </button>
   ) 
}
export default Button