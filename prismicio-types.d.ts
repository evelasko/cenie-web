// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Wide Header field in *Home Page*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: home_page.wide_header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  wide_header: prismic.BooleanField;

  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice> /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<HomePageDocumentData>,
  'home_page',
  Lang
>;

/**
 * Item in *Navigation → Primary Navigation*
 */
export interface NavigationDocumentDataPrimaryNavigationItem {
  /**
   * items field in *Navigation → Primary Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.primary_navigation[].items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  items: prismic.ContentRelationshipField<'primary_navigation_item'>;
}

/**
 * Item in *Navigation → Footer Navigation*
 */
export interface NavigationDocumentDataFooterNavigationItem {
  /**
   * Items field in *Navigation → Footer Navigation*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.footer_navigation[].items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  items: prismic.ContentRelationshipField<'primary_navigation_item'>;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Primary Navigation field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.primary_navigation[]
   * - **Tab**: Primary
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  primary_navigation: prismic.GroupField<Simplify<NavigationDocumentDataPrimaryNavigationItem>> /**
   * Footer Navigation field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.footer_navigation[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  footer_navigation: prismic.GroupField<Simplify<NavigationDocumentDataFooterNavigationItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<NavigationDocumentData>,
  'navigation',
  Lang
>;

type PageDocumentDataSlicesSlice = HeroSlice | TextBodySlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<PageDocumentData>,
  'page',
  Lang
>;

/**
 * Item in *Navigation Item → Child Items*
 */
export interface PrimaryNavigationItemDocumentDataChildItemsItem {
  /**
   * Child Link field in *Navigation Item → Child Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: primary_navigation_item.child_items[].child_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  child_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Navigation Item documents
 */
interface PrimaryNavigationItemDocumentData {
  /**
   * Target Link field in *Navigation Item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: primary_navigation_item.target_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  target_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Child Items field in *Navigation Item*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: primary_navigation_item.child_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  child_items: prismic.GroupField<Simplify<PrimaryNavigationItemDocumentDataChildItemsItem>>;
}

/**
 * Navigation Item document from Prismic
 *
 * - **API ID**: `primary_navigation_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PrimaryNavigationItemDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PrimaryNavigationItemDocumentData>,
    'primary_navigation_item',
    Lang
  >;

type SectionDocumentDataSlicesSlice = HeroSlice | TextBodySlice;

/**
 * Content for Section documents
 */
interface SectionDocumentData {
  /**
   * Slice Zone field in *Section*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: section.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SectionDocumentDataSlicesSlice> /**
   * Meta Title field in *Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: section.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: section.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Section document from Prismic
 *
 * - **API ID**: `section`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<SectionDocumentData>,
  'section',
  Lang
>;

type SectionPageDocumentDataSlicesSlice = HeroSlice | TextBodySlice;

/**
 * Content for Section Page documents
 */
interface SectionPageDocumentData {
  /**
   * Section field in *Section Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: section_page.section
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  section: prismic.ContentRelationshipField<'section'>;

  /**
   * Slice Zone field in *Section Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: section_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SectionPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Section Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: section_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Section Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: section_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Section Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Section Page document from Prismic
 *
 * - **API ID**: `section_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectionPageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
  Simplify<SectionPageDocumentData>,
  'section_page',
  Lang
>;

interface SettingsDocumentData {}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<SettingsDocumentData>,
  'settings',
  Lang
>;

export type AllDocumentTypes =
  | HomePageDocument
  | NavigationDocument
  | PageDocument
  | PrimaryNavigationItemDocument
  | SectionDocument
  | SectionPageDocument
  | SettingsDocument;

/**
 * Item in *Hero → Default → Primary → Cards*
 */
export interface HeroSliceDefaultPrimaryCardsItem {
  /**
   * Overtitle field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].overtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  overtitle: prismic.KeyTextField;

  /**
   * Title field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Undertitle field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].undertitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  undertitle: prismic.KeyTextField;

  /**
   * Image Path field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].image_path
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_path: prismic.KeyTextField;

  /**
   * Lucide Icon field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].lucide_icon
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lucide_icon: prismic.KeyTextField;

  /**
   * Green Tag field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].green_tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  green_tag: prismic.KeyTextField;

  /**
   * Red Tag field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].red_tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  red_tag: prismic.KeyTextField;

  /**
   * Link field in *Hero → Default → Primary → Cards*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Image Path field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image_path
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_path: prismic.KeyTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;

  /**
   * Cards field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *TextBody → Default → Primary*
 */
export interface TextBodySliceDefaultPrimary {
  /**
   * content field in *TextBody → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_body.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Show Share Button field in *TextBody → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: text_body.default.primary.show_share_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_share_button: prismic.BooleanField;

  /**
   * Show Favorite Button field in *TextBody → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: text_body.default.primary.show_favorite_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_favorite_button: prismic.BooleanField;
}

/**
 * Default variation for TextBody Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBodySliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<TextBodySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBody*
 */
type TextBodySliceVariation = TextBodySliceDefault;

/**
 * TextBody Shared Slice
 *
 * - **API ID**: `text_body`
 * - **Description**: TextBody
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBodySlice = prismic.SharedSlice<'text_body', TextBodySliceVariation>;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataPrimaryNavigationItem,
      NavigationDocumentDataFooterNavigationItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PrimaryNavigationItemDocument,
      PrimaryNavigationItemDocumentData,
      PrimaryNavigationItemDocumentDataChildItemsItem,
      SectionDocument,
      SectionDocumentData,
      SectionDocumentDataSlicesSlice,
      SectionPageDocument,
      SectionPageDocumentData,
      SectionPageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimaryCardsItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      TextBodySlice,
      TextBodySliceDefaultPrimary,
      TextBodySliceVariation,
      TextBodySliceDefault,
    };
  }
}
