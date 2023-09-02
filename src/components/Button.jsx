/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Button({children, width}) {
    return (
      <button className={`my-3 ${width} border-solid border-black bg-violet-600 p-2.5 font-bold text-white`}>
        {children}
      </button>
    );
}

export default Button
