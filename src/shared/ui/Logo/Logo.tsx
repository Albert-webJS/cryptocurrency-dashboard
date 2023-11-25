import { DetailedHTMLProps, HTMLAttributes } from "react"

import { AppLink } from "../AppLink/AppLink";

import cn from 'classnames';
import styles from './Logo.module.css';

interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Logo = ({ className, ...props}: LogoProps) => {
    return (
        <div className={cn(styles.logo, className)} {...props}>
            <AppLink to='/'>CryptoDash</AppLink>
        </div>
    )
}