import React from 'react'
import { Route } from 'react-router-dom'
import Button from '../Button'
import Icon from '../Icon'

export default function BackButton ({ onClick, ...props }) {
  return (
    <Route>
      {({ history }) => (
        <Button
          type='button'
          onClick={e => {
            e.preventDefault()
            history.goBack()
            if (onClick) {
              onClick(e)
            }
          }}
          before={<Icon icon='chevron-left' />}
          children='Back'
          {...props}
        />
      )}
    </Route>
  )
}
