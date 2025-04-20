import styles from './Layout.module.sass';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  headerHide?: boolean;
  children: React.ReactNode;
  footerHide?: boolean;
  headerWide?: boolean;
  lang?: string;
  localizedUrls?: Record<string, string>;
}

export default function Layout({
  headerHide,
  children,
  footerHide,
  headerWide,
  lang,
  localizedUrls,
}: LayoutProps) {
  return (
    <>
      <div className={styles.page}>
        {!headerHide && (
          <Header headerWide={headerWide ?? false} lang={lang} localizedUrls={localizedUrls} />
        )}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
}
