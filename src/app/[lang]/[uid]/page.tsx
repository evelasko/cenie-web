import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout';
import { getLocales } from '@/lib/utils/getLocales';

type Params = { lang: string; uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang, uid } = await params;

  const client = createClient();
  const page = await client.getByUID('section', uid, { lang }).catch(() => notFound());

  const pageLocales = await getLocales(page, client);
  const localizedUrls =
    pageLocales.length < 1
      ? undefined
      : pageLocales.reduce((acc, l) => ({ ...acc, [l.lang]: l.url }), {});

  return (
    <Layout lang={lang} localizedUrls={localizedUrls}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, uid } = await params;
  const client = createClient();
  const page = await client.getByUID('section', uid, { lang }).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? '' }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('section');

  return pages.map(page => ({ uid: page.uid }));
}
