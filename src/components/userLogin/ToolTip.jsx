/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function ToolTip({handleShow, handleClose}) {
    return (
      <div
        className="bg-black text-white absolute text-center p-2 top-10 w-100 z-10 left-0"
        onMouseOver={handleShow}
        onMouseLeave={handleClose}
      >
      hello
         
      </div>
    );
}

export default ToolTip
