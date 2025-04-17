import Link from "next/link";
import cn from "classnames";
import styles from "./Bidding.module.sass";
import Icon from "@/components/Icon";

type BiddingProps = {
  title: string;
  items: string[];
  children: React.ReactNode;
  activeIndex: number;
};
const Bidding = ({ title, items, children, activeIndex }: BiddingProps) => {
  return (
    <div className={styles.bidding}>
      <div className={styles.head}>
        <div className={cn("container", styles.container)}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={styles.info}>
            How to buy crypto on Bitcloud{" "}
            <Link className={styles.link} href="/learn-crypto">
              Learn now <Icon name="arrow-right" size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.steps}>
            {items.map((x, index) => (
              <div
                className={cn(
                  styles.step,
                  { [styles.next]: index === activeIndex },
                  { [styles.active]: index < activeIndex }
                )}
                key={index}
              >
                <div className={styles.number}>{index + 1}</div>
                {x}
              </div>
            ))}
          </div>
          <div className={styles.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
