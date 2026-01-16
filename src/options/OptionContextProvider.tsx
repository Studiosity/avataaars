import * as React from 'react'
import OptionContext from './OptionContext'

const OptionContextReactContext = React.createContext<OptionContext | null>(null)

export const OptionContextProvider: React.FC<{
  optionContext: OptionContext
  children: React.ReactNode
// tslint:disable-next-line:ter-arrow-body-style
}> = ({ optionContext, children }) => {
  return (
    <OptionContextReactContext.Provider value={optionContext}>
      {children}
    </OptionContextReactContext.Provider>
  )
}

export const useOptionContext = (): OptionContext => {
  const context = React.useContext(OptionContextReactContext)
  if (!context) {
    throw new Error('useOptionContext must be used within OptionContextProvider')
  }
  return context
}

export default OptionContextReactContext
