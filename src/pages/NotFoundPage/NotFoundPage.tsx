import { AppLink } from 'src/shared';

import styles from './NotFoundPage.module.css';

export const NotFoundPage = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src="src/assets/404-error.png" alt="404 error" />
			</div>
			<div className={styles.tips}>
				<span className={styles.tipsBold}>Sorry! The page you’re looking for cannot be found.</span>
				<AppLink className={styles.homeLink} active to="/">
					Go to Homepage
				</AppLink>
			</div>
		</div>
	);
};
