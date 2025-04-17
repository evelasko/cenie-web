import Link from 'next/link';
import cn from 'classnames';
import styles from './PageList.module.sass';

const PageList = () => {
  return (
    <div className={styles.page}>
      <div className={cn('container', styles.container)}>
        <p>
          <Link href="/theme/">Home</Link>
        </p>
        <p>
          <Link href="/theme/market">Market</Link>
        </p>
        <p>
          <Link href="/theme/learn-crypto">Learn crypto</Link>
        </p>
        <p>
          <Link href="/theme/learn-crypto-details">Learn crypto details</Link>
        </p>
        <p>
          <Link href="/theme/contact">Contact</Link>
        </p>
        <p>
          <Link href="/theme/notifications">Notifications</Link>
        </p>
        <p>
          <Link href="/theme/activity">Activity</Link>
        </p>
        <p>
          <Link href="/theme/exchange">Exchange</Link>
        </p>
        <p style={{ marginTop: '40px' }}>
          <Link href="/theme/wallet-overview">Wallet overview</Link>
        </p>
        <p>
          <Link href="/theme/wallet-overview/01">Wallet overview details</Link>
        </p>
        <p>
          <Link href="/theme/wallet-margin">Wallet margin</Link>
        </p>
        <p>
          <Link href="/theme/fiat-and-spot">Fiat and spot</Link>
        </p>
        <p style={{ marginTop: '40px' }}>
          <Link href="/theme/deposit-fiat">Deposit Fiat</Link>
        </p>
        <p>
          <Link href="/theme/buy-crypto">Buy Crypto</Link>
        </p>
        <p>
          <Link href="/theme/sell-crypto">Sell Crypto</Link>
        </p>
        <p style={{ marginTop: '40px' }}>
          <Link href="/theme/profile-info">Profile info</Link>
        </p>
        <p>
          <Link href="/theme/referrals">Referrals</Link>
        </p>
        <p>
          <Link href="/theme/api-keys">Api keys</Link>
        </p>
        <p>
          <Link href="/theme/sessions-and-login-history">Sessions & login history</Link>
        </p>
        <p>
          <Link href="/theme/2fa">2fa</Link>
        </p>
        <p>
          <Link href="/theme/change-password">Change password</Link>
        </p>
        <p style={{ marginTop: '40px' }}>
          <Link href="/theme/sign-in">Sign in</Link>
        </p>
        <p>
          <Link href="/theme/sign-up">Sign up</Link>
        </p>
        <p>
          <Link href="/theme/forgot-password">Forgot password</Link>
        </p>
      </div>
    </div>
  );
};

export default PageList;
