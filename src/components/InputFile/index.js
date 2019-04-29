import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Input, Icon, ButtonGroup, Button, Config, Dropper } from '../..'
import { ButtonWrapper, HiddenInputFile } from './styles'

export default function InputFile (props) {
  const inputFileRef = useRef(null)

  const {
    value,
    onChange,
    disabled,
    accept,
    ...rest
  } = props

  return (
    <Dropper
      onChange={files => files && files.length > 0 && onChange(files[0])}
    >
      <Input
        value={value ? value.name : ''}
        onChange={() => null}
        before={<Icon icon='upload' />}
        onClick={() => {
          if (!value) {
            inputFileRef.current.click()
          }
        }}
        {...rest}
      />
      {!disabled && (
        <ButtonWrapper>
          <ButtonGroup stackAt='0px'>
            {value && (
              <Button
                type='button'
                appearance='danger'
                size='small'
                children={<Config id='messages.clear' />}
                onClick={() => onChange(null)}
              />
            )}
            <Button
              type='button'
              appearance='primary'
              size='small'
              children={<Config id='messages.selectFile' />}
              onClick={() => inputFileRef.current.click()}
            />
          </ButtonGroup>
        </ButtonWrapper>
      )}
      <HiddenInputFile
        ref={inputFileRef}
        onChange={e => onChange(e.target.files[0])}
        accept={accept}
      />
    </Dropper>
  )
}

InputFile.propTypes = {
  /** File value. It should be an object with `name` as required property */
  value: PropTypes.object,

  /** Change handler */
  onChange: PropTypes.func,

  /** Input disabled */
  disabled: PropTypes.bool,

  /** Mime types that the input accepts similar to input[accept] */
  accept: PropTypes.string
}
