import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, VerticalSpacer } from '../..'
import { Color, ColorLabel } from './styles'

export default function ThemeDescriptor ({ theme }) {
  return (
    <VerticalSpacer space={60}>
      {Object.keys(theme).map(key => (
        <div key={key}>
          <h2>{key}</h2>
          <VerticalSpacer>
            {Object.keys(theme[key]).map(prop => {
              const value = theme[key][prop]
              return (
                <FormGroup
                  id={`${key}.${prop}`}
                  key={`${key}.${prop}`}
                  label={prop}
                >
                  {value.startsWith && value.startsWith('#') ? (
                    <Color color={value}>
                      <ColorLabel>{value}</ColorLabel>
                    </Color>
                  ) : (
                    <Input
                      defaultValue={value}
                      readOnly
                    />
                  )}
                </FormGroup>
              )
            })}
          </VerticalSpacer>
        </div>
      ))}
    </VerticalSpacer>
  )
}

ThemeDescriptor.propTypes = {
  /** Theme object */
  theme: PropTypes.object.isRequired
}
