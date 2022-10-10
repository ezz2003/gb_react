import React from "react";
import { useDispatch, useSelector } from "react-redux";

const toggleAcc = (value) => ({
  type: 'SWITCH_TOGGLE',
  payload: value
})

const Toggler = () => {
  const isChecked = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <>
      <input type={'checkbox'} value={isChecked} onChange={() => {
        dispatch({type: 'SWITCH_TOGGLE', payload:[]})
      }
        
        }/>
    </>
  )
}

export default Toggler