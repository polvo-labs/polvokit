import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useConfig } from '../..'
import { Container } from './styles'

export default function Dropper ({ onChange, ...props }) {
  const [ dragging, setDragging ] = useState(false)
  const [ element, setElement ] = useState(null)
  const label = useConfig({ id: 'messages.dropHere' })

  useEffect(() => {
    if (!element) {
      return
    }

    const handleDragIn = eventHandler(e => {
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setDragging(true)
      }
    })

    const handleDragOut = eventHandler(() => {
      setDragging(false)
    })

    const handleDrag = eventHandler()

    const handleDrop = eventHandler(e => {
      setDragging(false)
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChange(e.dataTransfer.files)
      }
    })

    element.addEventListener('dragenter', handleDragIn)
    element.addEventListener('dragleave', handleDragOut)
    element.addEventListener('dragover', handleDrag)
    element.addEventListener('drop', handleDrop)

    return () => {
      element.removeEventListener('dragenter', handleDragIn)
      element.removeEventListener('dragleave', handleDragOut)
      element.removeEventListener('dragover', handleDrag)
      element.removeEventListener('drop', handleDrop)
    }
  }, [element])

  return (
    <Container
      ref={setElement}
      label={label}
      dragging={dragging}
      {...props}
    />
  )
}

Dropper.propTypes = {
  /** Change handler. It receives an FileList as argument */
  onChange: PropTypes.func.isRequired
}

const eventHandler = callback => e => {
  e.preventDefault()
  e.stopPropagation()
  return callback && callback(e)
}
