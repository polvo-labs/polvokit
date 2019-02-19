export default function filterProps (props, blacklist) {
  const list = Array.isArray(blacklist)
    ? blacklist
    : Object.keys(blacklist)

  return Object.keys(props).reduce((memo, propKey) => {
    if (list.indexOf(propKey) === -1) {
      memo[propKey] = props[propKey]
    }

    return memo
  }, {})
}
