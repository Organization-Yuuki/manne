import { FC } from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

interface Props extends LinkProps {}

export const Link: FC<Props> = ({ children, ...props }) => {
  return <RouterLink {...props}>{children}</RouterLink>
}
