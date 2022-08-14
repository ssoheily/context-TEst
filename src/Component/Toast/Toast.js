import React from 'react'
import { useContext } from 'react'
import productsContext from '../../Context/Productscontext'
import "./Toast.css"
export default function Toast() {

  const contextData=useContext(productsContext)

  return (
    // {
    //   setIsShowToast(true);
    // }
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
        <div className={` ${contextData.isShowToast ? "show" : "" } toast align-items-center  text-white bg-primary `}>{/* add show class to show toast */}
            <div className="d-flex justify-content-between align-items-center">
                <button  type= "button" className="btn-close btn-close-white ms-3" onClick={()=>{
                      contextData.setIsShowToast(false)
                }             
                }></button>
                <div className="toast-body">succes to add Product in Card</div> 
            </div>

        </div>
    </div>
  )
}
