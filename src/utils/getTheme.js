import objectPath from 'object-path'
import theme from '../theme'

export default (keypath, transform = value => value) =>
  props => transform(
    objectPath.get(
      props.theme,
      `polvokit.${keypath}`,
      objectPath.get(
        theme,
        keypath
      )
    )
  )
