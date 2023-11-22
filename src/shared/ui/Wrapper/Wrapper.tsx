import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import cn from 'classnames';
import styles from './Wrapper.module.css';

interface WrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Wrapper: FC<WrapperProps> = ({ className, children, ...props}): JSX.Element => {
    return (
        <div className={cn(styles.container, className)} {...props}>{children}</div>
    )
}