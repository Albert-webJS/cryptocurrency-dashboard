import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import cn from 'classnames';
import styles from './CoinCard.module.css';

interface CoinCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CoinCard: FC<CoinCardProps> = ({ className, children, ...props}): JSX.Element => {
    return (
        <div className={cn(styles.card, className)} {...props}>{children}</div>
    )
}