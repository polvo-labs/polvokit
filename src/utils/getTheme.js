import objectPath from 'object-path'
import theme from '../theme'

export default (keypath, transform = value => value) =>
  transform(
    objectPath.get(
      theme,
      keypath
    )
  )
