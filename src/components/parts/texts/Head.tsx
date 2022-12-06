import { ElementType, FC, HTMLAttributes, memo, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

const BeforeMemoHead: FC<Props> = ({
  level,
  children,
  className,
  ...props
}) => {
  const HeadTag = `h${level}` as ElementType

  return (
    <HeadTag className={className} {...props}>
      {children}
    </HeadTag>
  )
}

export const Head = memo(BeforeMemoHead)
Head.displayName = 'Head'
