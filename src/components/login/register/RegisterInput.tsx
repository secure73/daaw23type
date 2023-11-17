//Teil von Dominik
import React, { Fragment } from 'react'

type RegisterInputProps ={
    type : "password" | "email";
    placeholder?: string;
    setterFunction :React.Dispatch<React.SetStateAction<string>>
}

const RegisterInput = (props:RegisterInputProps) => {
  return (
    <Fragment>
        <input
        type={props.type}
        placeholder={props.placeholder} 
        required/>
    </Fragment>
  )
}

export default RegisterInput