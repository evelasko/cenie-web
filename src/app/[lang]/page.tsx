import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout';
import { locales } from '@/constants/locales';

type Params = { lang: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang } = await params;

  const client = createClient();
  const page = await client.getSingle('home_page', { lang }).catch(() => notFound());

  const localizedUrls = Object.keys(locales).reduce((acc, l) => ({ ...acc, [l]: `/${l}` }), {});

  return (
    <Layout lang={lang} localizedUrls={localizedUrls}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params;
  const client = createClient();
  const page = await client.getSingle('home_page', { lang }).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? '' }],
    },
  };
}
