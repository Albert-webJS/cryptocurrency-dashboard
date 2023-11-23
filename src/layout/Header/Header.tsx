import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { Logo } from "src/shared";
import { Navbar } from "src/widgets";

import cn from 'classnames'
import styles from './Header.module.css';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<HeaderProps> = ({ className, ...props}) => {
    return (
        <header className={cn(styles.header, className)} {...props}>
            <Logo />
            <Navbar/>
        </header>
    )
}