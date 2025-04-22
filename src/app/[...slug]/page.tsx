import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asImageSrc } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Layout from '@/components/Layout';

type Params = { slug: string[] };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const client = createClient();
  const page = await client.getByUID('section_page', slug.at(-1) || '').catch(() => notFound());

  return (
    <Layout>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();
  const page = await client.getByUID('section_page', slug.at(-1) || '').catch(() => notFound());

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
  const pages = await client.getAllByType('section_page');

  return pages.map(page => {
    return { slug: (page.url ?? '/').split('/').slice(1) };
  });
}
