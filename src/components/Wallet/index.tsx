'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './Wallet.module.sass';
import Icon from '@/components/Icon';
import Modal from '../Modal';
import Withdraw from '../Withdraw';
import Transfer from '../Transfer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const navigation = [
  {
    title: 'Overview',
    color: '#23262F',
    url: '/wallet-overview',
  },
  {
    title: 'Margin',
    color: '#9757D7',
    url: '/wallet-margin',
  },
  {
    title: 'Fiat and Spot',
    color: '#FFD166',
    url: '/fiat-and-spot',
    separator: true,
  },
  {
    title: 'Transfer',
    icon: 'arrow-next',
  },
  {
    title: 'Buy with Fiat',
    icon: 'wallet',
    url: '/buy-crypto',
  },
  {
    title: 'Sell for Fitat',
    icon: 'sell',
    url: '/sell-crypto',
  },
];

const Wallet = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const pathname = usePathname();

  const [visibleWithdraw, setVisibleWithdraw] = useState(false);
  const [visibleTransfer, setVisibleTransfer] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const activeItem = navigation.find(x => x.url && pathname?.includes(x.url));

  return (
    <>
      <div className={cn(className, styles.wallet)}>
        <div className={styles.sidebar}>
          <div
            className={cn(styles.group, {
              [styles.active]: visibleMenu,
            })}
          >
            <div className={styles.top} onClick={() => setVisibleMenu(!visibleMenu)}>
              <div className={styles.bg} style={{ backgroundColor: activeItem?.color }}></div>
              {activeItem?.title}
            </div>
            <div className={styles.menu}>
              {navigation.map((item, index) =>
                item.url ? (
                  <Link
                    className={cn(styles.item, {
                      [styles.separator]: item.separator,
                      [styles.active]: pathname === item.url,
                    })}
                    href={item.url}
                    key={index}
                  >
                    {item.color && (
                      <div
                        className={styles.bg}
                        style={{
                          backgroundColor: item.color,
                        }}
                      ></div>
                    )}
                    {item.icon && <Icon name={item.icon} size={20} />}
                    {item.title}
                  </Link>
                ) : (
                  <button
                    className={cn(styles.item, {
                      [styles.separator]: item.separator,
                    })}
                    key={index}
                    onClick={() => setVisibleTransfer(!visibleTransfer)}
                  >
                    {item.icon && <Icon name={item.icon} size={20} />}
                    {item.title}
                  </button>
                )
              )}
            </div>
          </div>
          <div className={styles.btns}>
            <Link className={cn('button button-small', styles.button)} href="/deposit-fiat">
              Deposit
            </Link>
            <button
              className={cn('button-stroke button-small', styles.button)}
              onClick={() => setVisibleWithdraw(!visibleWithdraw)}
            >
              Withdraw
            </button>
            <button
              className={cn('button-stroke button-small', styles.button)}
              onClick={() => setVisibleTransfer(!visibleTransfer)}
            >
              Transfer
            </button>
          </div>
        </div>
        <div className={styles.wrapper}>{children}</div>
      </div>
      <Modal visible={visibleWithdraw} onClose={() => setVisibleWithdraw(false)}>
        <Withdraw />
      </Modal>
      <Modal visible={visibleTransfer} onClose={() => setVisibleTransfer(false)}>
        <Transfer />
      </Modal>
    </>
  );
};

export default Wallet;
