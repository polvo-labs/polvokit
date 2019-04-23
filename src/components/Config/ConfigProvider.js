import * as React from 'react'

export const Context = React.createContext()

export default function ConfigProvider ({ config, ...props }) {
  return (
    <Context.Provider
      value={config}
      {...props}
    />
  )
}
