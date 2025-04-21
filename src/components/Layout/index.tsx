import styles from './Layout.module.sass';
import Header, { NavigationEntry } from './Header';
import Footer from './Footer';
import { createClient } from '@/prismicio';
import { Content, FieldState, isFilled, LinkField } from '@prismicio/client';
import { validateLinkField } from '@/lib/utils/validatePrismicFields';

interface LayoutProps {
  headerHide?: boolean;
  children: React.ReactNode;
  footerHide?: boolean;
  headerWide?: boolean;
  lang?: string;
  localizedUrls?: Record<string, string>;
}

export default async function Layout({
  headerHide,
  children,
  footerHide,
  headerWide,
  lang,
  localizedUrls,
}: LayoutProps) {
  const client = createClient();
  const navigation = await client.getSingle('navigation', {
    lang,
    fetchLinks: ['primary_navigation_item.target_link', 'primary_navigation_item.child_items'],
  });
  const items: NavigationEntry[] = navigation.data.primary_navigation
    .map(i => {
      const itemData = (i.items as unknown as Content.PrimaryNavigationItemDocument).data;
      if (!validateLinkField(itemData.target_link)) return undefined;

      const item = {
        label: itemData.target_link.text!,
        url: (itemData.target_link as LinkField<string, string, unknown, 'filled', never>).url!,
        items: [] as { label: string; url: string }[],
      };

      if (isFilled.group(itemData.child_items)) {
        item.items = itemData.child_items
          .map(({ child_link }) =>
            !validateLinkField(child_link)
              ? undefined
              : {
                  label: child_link.text!,
                  url: (child_link as LinkField<string, string, unknown, 'filled', never>).url!,
                }
          )
          .filter(i => i !== undefined);
      }
      return item;
    })
    .filter(i => i !== undefined);
  return (
    <>
      <div className={styles.page}>
        {!headerHide && (
          <Header
            headerWide={headerWide ?? false}
            lang={lang}
            localizedUrls={localizedUrls}
            navigation={items}
          />
        )}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
}
