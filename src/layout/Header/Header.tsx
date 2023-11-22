import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import cn from 'classnames'
import styles from './Header.module.css';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, children, ...props}) => {
    return (
        <header className={cn(styles.header, className)} {...props}>{children}</header>
    )
}