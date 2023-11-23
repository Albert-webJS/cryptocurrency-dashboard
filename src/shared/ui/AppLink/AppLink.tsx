import { FC } from "react"
import { Link, LinkProps } from 'react-router-dom';

import cn from 'classnames';
import styles from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
    active?: boolean
}

export const AppLink: FC<AppLinkProps> = ({ to, className, active, children, ...props}) => {
    return <Link className={cn(styles.link, className, {
        [styles.active]: active
    })} to={to} {...props}>{children}</Link>
}