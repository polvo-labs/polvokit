import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    width: calc(50% - 5px);
  }
`
