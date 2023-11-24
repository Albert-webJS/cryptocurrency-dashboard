import styles from './Loader.module.css';

import cn from 'classnames';

interface LoaderProps {
    size: 'small' | 'middle' | 'large'
}

export const Loader = ({ size }: LoaderProps) => {
    return <div datatype='loader' className={cn(styles.loader, {
        [styles.small]: size === 'small',
        [styles.middle]: size === 'middle',
        [styles.large]: size === 'large',
    })}></div>
}