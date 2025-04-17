'use client';
import { useEffect } from 'react';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import styles from './Page.module.sass';
import Header from '../Header';
import Footer from '../Footer';
import { usePathname } from 'next/navigation';

const Page = ({
  headerHide,
  children,
  footerHide,
  headerWide,
}: {
  headerHide?: boolean;
  children: React.ReactNode;
  footerHide?: boolean;
  headerWide?: boolean;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <>
      <div className={styles.page}>
        {!headerHide && <Header headerWide={headerWide ?? false} />}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
};

export default Page;
