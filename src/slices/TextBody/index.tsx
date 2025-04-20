import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Article from '@/components/Article';
/**
 * Props for `TextBody`.
 */
export type TextBodyProps = SliceComponentProps<Content.TextBodySlice>;

/**
 * Component for "TextBody" Slices.
 */
const TextBody: FC<TextBodyProps> = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <Article
        content={slice.primary.content}
        showShare={slice.primary.show_share_button}
        showFavorite={slice.primary.show_favorite_button}
      />
    </section>
  );
};

export default TextBody;
