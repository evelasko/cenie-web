'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './FiatAndSpot.module.sass';
import Link from 'next/link';
import Wallet from '@/components/Wallet';
import Main from './Main';
import Funds from '@/components/Funds';
import Modal from '@/components/Modal';
import Withdraw from '@/components/Withdraw';

const FiatAndSpot = () => {
  const [visibleWithdraw, setVisibleWithdraw] = useState(false);

  return (
    <>
      <Wallet>
        <Main />
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.head}>Funds</div>
            <div className={styles.body}>
              <Funds>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  href="/theme/buy-crypto"
                >
                  Buy
                </Link>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  href="/theme/deposit-fiat"
                >
                  Deposit
                </Link>
                <button
                  className={cn('button-stroke button-small', styles.button)}
                  onClick={() => setVisibleWithdraw(true)}
                >
                  Withdraw
                </button>
                <Link
                  className={cn('button-stroke button-small', styles.button)}
                  href="/theme/exchange"
                >
                  Trade
                </Link>
              </Funds>
            </div>
          </div>
        </div>
      </Wallet>
      <Modal visible={visibleWithdraw} onClose={() => setVisibleWithdraw(false)}>
        <Withdraw />
      </Modal>
    </>
  );
};

export default FiatAndSpot;
