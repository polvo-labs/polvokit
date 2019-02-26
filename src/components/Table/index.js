import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Head,
  Row,
  Column,
  Cell
} from './styles'

function Table (props) {
  const {
    data,
    columns
  } = props

  return (
    <Container>
      <Header>
        {columns.map((column, index) => (
          <Column key={index}>
            <Head>
              {column.header}
            </Head>
          </Column>
        ))}
      </Header>
      <div>
        {data.map((row, index) => (
          <Row key={index}>
            {columns.map((column, colIndex) => (
              <Column key={colIndex}>
                <Cell>
                  {column.cell(row)}
                </Cell>
              </Column>
            ))}
          </Row>
        ))}
      </div>
    </Container>
  )
}

Table.propTypes = {
  /** Data */
  data: PropTypes.array.isRequired,

  /** Columns */
  columns: PropTypes.array.isRequired
}

export default Table
