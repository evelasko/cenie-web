import { Metadata } from 'next';
import MediaGallery from './MediaGallery';

export const metadata: Metadata = {
  title: 'Media Gallery',
  description: 'Browse media files',
};

export default function GalleryPage() {
  return <MediaGallery />;
}
