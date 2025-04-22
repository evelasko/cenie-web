'use client';

import React, { useState, useEffect } from 'react';
import styles from './MediaGallery.module.css';
import Image from '@/components/Image';
interface ImageInfo {
  path: string; // Relative path from images folder (includes filename)
  name: string; // Just the filename
}

interface MediaGalleryClientProps {
  images: ImageInfo[];
}

export default function MediaGalleryClient({ images }: MediaGalleryClientProps) {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);

  // Update filtered images when search query changes
  useEffect(() => {
    const filtered = images.filter(
      image =>
        image.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchQuery, images]);

  const copyToClipboard = (path: string) => {
    navigator.clipboard
      .writeText(path)
      .then(() => {
        setCopyMessage(`Copied: ${path}`);
        setTimeout(() => setCopyMessage(null), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  // Helper function to get folder path for display
  const getFolderPath = (fullPath: string): string => {
    const lastSlashIndex = fullPath.lastIndexOf('/');
    if (lastSlashIndex === -1) return '';
    return fullPath.substring(0, lastSlashIndex);
  };

  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Media Gallery</h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search images by name or path..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>}

      {filteredImages.length === 0 ? (
        <div className={styles.noResults}>No images found matching {searchQuery}</div>
      ) : (
        <div className={styles.gallery}>
          {filteredImages.map((image, index) => {
            const folderPath = getFolderPath(image.path);

            return (
              <div
                key={index}
                className={styles.imageContainer}
                onClick={() => copyToClipboard(`/images/${image.path}`)}
              >
                <Image
                  src={`/images/${image.path}`}
                  alt={`Gallery image ${index}`}
                  className={styles.image}
                />
                <div className={styles.imageInfo}>
                  {folderPath && <div className={styles.folderPath}>{folderPath}</div>}
                  <div className={styles.imageName}>{image.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
