import Link from 'next/link';
import cn from 'classnames';
import styles from './Login.module.sass';

type LoginProps = {
  className?: string;
  content: string;
  linkText: string;
  linkUrl: string;
  children: React.ReactNode;
};
const Login = ({ className, content, linkText, linkUrl, children }: LoginProps) => {
  return (
    <div className={cn(className, styles.login)}>
      <div
        className={styles.col}
        style={{
          backgroundImage: 'url(/images/content/bg-login.png)',
        }}
      >
        <Link className={styles.logo} href="/">
          <img src="/images/logo-light.svg" alt="BitCloud" />
          <img src="/images/logo-dark.svg" alt="BitCloud" />
        </Link>
      </div>
      <div className={styles.col}>
        <div className={styles.head}>
          <span>{content}</span>
          <Link className={styles.link} href={linkUrl}>
            {linkText}
          </Link>
        </div>
        <div className={styles.wrap}>{children}</div>
      </div>
    </div>
  );
};

export default Login;
