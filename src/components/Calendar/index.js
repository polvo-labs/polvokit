import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import {
  Container,
  Header,
  HeaderButton,
  HeaderInfo,
  Weekdays,
  Weekday,
  Grid
} from './styles'

function Calendar (props) {
  const {
    value,
    onChange,
    formatHeaderDisplay
  } = props

  const [ displayDate, setDisplayDate ] = useState(value)

  return (
    <Container>
      <Header>
        <HeaderButton
          title='Previous month'
        >
          <Icon icon='chevron-left' />
        </HeaderButton>
        <HeaderInfo>
          {formatHeaderDisplay(displayDate, props)}
        </HeaderInfo>
        <HeaderButton
          title='Next month'
        >
          <Icon icon='chevron-right' />
        </HeaderButton>
      </Header>
      <Weekdays>
        <Weekday>Dom</Weekday>
        <Weekday>Seg</Weekday>
        <Weekday>Ter</Weekday>
        <Weekday>Qua</Weekday>
        <Weekday>Qui</Weekday>
        <Weekday>Sex</Weekday>
        <Weekday>Sáb</Weekday>
      </Weekdays>
      <Grid>

      </Grid>
    </Container>
  )
}

Calendar.propTypes = {
  /** Selected Date */
  value: PropTypes.instanceOf(Date)
}

Calendar.defaultProps = {
  value: new Date(),
  formatHeaderDisplay: date => 'Fevereiro - 2019'
}

export default Calendar
