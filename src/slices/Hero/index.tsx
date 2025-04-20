import { FC } from 'react';
import cn from 'classnames';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import styles from './Hero.module.sass';
import Cards from './Cards';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={cn('section', styles.main)}>
        <div className={cn('container', styles.container)}>
          <div className={styles.wrap}>
            <h1 className={cn('h1', styles.title)}>{slice.primary.title ?? ''}</h1>
            <div className={styles.text}>{slice.primary.subtitle ?? ''}</div>
            {slice.primary.button_link && (
              <PrismicNextLink
                className={cn('button', styles.button)}
                field={slice.primary.button_link}
              />
            )}
            {/* <ScrollButton
            onScroll={() => scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' })}
            className={styles.scroll}
          /> */}
          </div>
          <div className={styles.bg}>
            {slice.primary.image_path && (
              <Image src={slice.primary.image_path as string} alt={'Hero Image'} />
            )}
            {slice.primary.image && <PrismicNextImage field={slice.primary.image} />}
          </div>
          {isFilled.group(slice.primary.cards) && (
            <Cards
              className={styles.cards}
              items={slice.primary.cards.map(card => ({
                title: (card.overtitle ?? '') as string,
                price: (card.title ?? '') as string,
                money: (card.undertitle ?? '') as string,
                image: (card.image_path ?? '') as string,
                url: (isFilled.link(card.link) ? card.link.url : '') as string,
                positive: isFilled.keyText(card.green_tag) ? card.green_tag : undefined,
                negative: isFilled.keyText(card.red_tag) ? card.red_tag : undefined,
              }))}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
