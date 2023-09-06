/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 
function Button({children, width, text, backgroundColor}) {
    return (
      <button
        className={`my-3 ${width} border-solid border-black ${backgroundColor} p-2.5 font-bold ${text}`}
      >
        {children}
      </button>
    );
}

export default Button

