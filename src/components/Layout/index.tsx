import styles from './Layout.module.sass';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  headerHide?: boolean;
  children: React.ReactNode;
  footerHide?: boolean;
  headerWide?: boolean;
}

export default function Layout({ headerHide, children, footerHide, headerWide }: LayoutProps) {
  return (
    <>
      <div className={styles.page}>
        {!headerHide && <Header headerWide={headerWide ?? false} />}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
}
