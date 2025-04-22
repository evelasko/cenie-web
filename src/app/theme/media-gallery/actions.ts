'use server';

import fs from 'fs';
import path from 'path';
import { cache } from 'react';

interface ImageInfo {
  path: string; // Relative path from images folder (includes filename)
  name: string; // Just the filename
}

// Helper function to recursively scan directories
const scanDirectory = (dir: string, baseDir: string): ImageInfo[] => {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let results: ImageInfo[] = [];

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (item.isDirectory()) {
      // Recursively scan subdirectories
      results = [...results, ...scanDirectory(fullPath, baseDir)];
    } else {
      // Check if file is an image
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
        results.push({
          path: relativePath.replace(/\\/g, '/'), // Normalize path separators
          name: item.name,
        });
      }
    }
  }

  return results;
};

// Use React's cache function to deduplicate requests
export const getImages = cache(async (): Promise<ImageInfo[]> => {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    return scanDirectory(imagesDirectory, imagesDirectory);
  } catch (error) {
    console.error('Error reading image directory:', error);
    return [];
  }
});
