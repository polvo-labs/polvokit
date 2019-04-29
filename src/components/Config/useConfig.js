import { useContext, useMemo } from 'react'
import objectPath from 'object-path'
import { Context } from './ConfigProvider'
import config from '../../config'

export default function useConfig ({ id, defaultValue }) {
  const context = useContext(Context)

  return useMemo(() => objectPath.get(
    context,
    id,
    objectPath.get(config, id, defaultValue)
  ), [])
}
