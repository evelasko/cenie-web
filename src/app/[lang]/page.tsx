import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Page';

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle('home_page', { lang }).catch(() => notFound());

  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
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
