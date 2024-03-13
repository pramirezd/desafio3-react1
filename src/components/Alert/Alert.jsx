import React from 'react'

const Alert = ({alerta}) => {

  const { alertText, alertCase, alertStatus } = alerta;

  return (
    <div className='alert-box col-12 col-lg-4 text-center'>
    <div className={`alert  ${alertStatus ? alertCase : 'display-none'} `}>
      <span>{alertText}</span>
    </div>
    </div>
  )
}

export default Alert