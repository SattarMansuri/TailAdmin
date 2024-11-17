import React, { useState } from 'react'
import FormContext from './Context'

const Provider = ({ children }) => {
  const [form, setform] = useState(false)
  return (
    <FormContext.Provider value={{ form, setform }}>
      {children}
    </FormContext.Provider>
  )
}

export default Provider