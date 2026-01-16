import * as React from 'react'

import Option from './Option'
import { useOptionContext } from './OptionContextProvider'

function getComponentOptionValue (component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass | string
  children?: React.ReactNode
}

export default function Selector({ option, defaultOption, children }: Props) {
  const optionContext = useOptionContext()
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)

  const optionContextUpdate = React.useCallback(() => {
    forceUpdate()
  }, [])

  const updateOptionValues = React.useCallback(() => {
    if (!children) return
    const values = React.Children.map(
      children,
      child => getComponentOptionValue((child as any).type)
    )
    if (new Set(values).size !== values?.length) {
      throw new Error('Duplicate values')
    }
    optionContext.setOptions(option.key, values)
  }, [children, option.key, optionContext])

  React.useEffect(() => {
    const defaultValue = typeof defaultOption === 'string' ? defaultOption : getComponentOptionValue(defaultOption)
    optionContext.addStateChangeListener(optionContextUpdate)
    optionContext.optionEnter(option.key)
    const optionState = optionContext.getOptionState(option.key)
    updateOptionValues()
    if (optionState) {
      optionContext.setDefaultValue(option.key, defaultValue)
    }
    return () => {
      optionContext.removeStateChangeListener(optionContextUpdate)
      optionContext.optionExit(option.key)
    }
  }, [option.key, defaultOption, optionContext, optionContextUpdate, updateOptionValues])

  React.useEffect(() => {
    updateOptionValues()
  }, [updateOptionValues])

  let result: React.ReactNode | null = null
  const value = optionContext.getValue(option.key)!
  React.Children.forEach(children, child => {
    if (getComponentOptionValue((child as any).type) === value) {
      result = child
    }
  })
  return <>{result}</>
}
