import { getImages } from './actions';
import MediaGalleryClient from './MediaGalleryClient';

export default async function MediaGallery() {
  // Fetch images server-side
  const images = await getImages();

  return <MediaGalleryClient images={images} />;
}
