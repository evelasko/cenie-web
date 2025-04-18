'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './Profile.module.sass';
import Icon from '@/components/Icon';
import Breadcrumbs, { BreadcrumbItem } from '@/components/Breadcrumbs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const navigation = [
  {
    title: 'Profile',
    icon: 'user',
    url: '/profile-info',
  },
  {
    title: 'Referrals',
    icon: 'share',
    url: '/referrals',
  },
  {
    title: 'API keys',
    icon: 'keyboard',
    url: '/api-keys',
    separator: true,
  },
  {
    title: 'Sessions & login history',
    icon: 'laptop',
    url: '/sessions-and-login-history',
  },
  {
    title: '2FA',
    icon: 'barcode',
    url: '/2fa',
  },
  {
    title: 'Change password',
    icon: 'lock',
    url: '/change-password',
  },
];

const Proflie = ({
  title,
  breadcrumbs,
  children,
}: {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const activeLink = navigation.find(x => pathname.includes(x.url));

  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <div className={cn('container', styles.container)}>
          <h2 className={cn('h2', styles.title)}>{title}</h2>
          <Breadcrumbs className={styles.breadcrumbs} items={breadcrumbs} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={cn('container', styles.container)}>
          <div className={styles.sidebar}>
            <div
              className={cn(styles.dropdown, {
                [styles.active]: visible,
              })}
            >
              <div className={styles.top} onClick={() => setVisible(!visible)}>
                {activeLink?.icon && <Icon name={activeLink?.icon} size={24} />}
                {activeLink?.title}
              </div>
              <div className={styles.group}>
                <div className={styles.menu}>
                  {navigation.map((item, index) => (
                    <Link
                      className={cn(styles.link, {
                        [styles.separator]: item.separator,
                        [styles.active]: pathname === item.url,
                      })}
                      key={index}
                      href={item.url}
                      onClick={() => setVisible(false)}
                    >
                      {item.icon && <Icon name={item.icon} size={24} />}
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Proflie;
