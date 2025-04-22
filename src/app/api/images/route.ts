import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const images = scanDirectory(imagesDirectory, imagesDirectory);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading image directory:', error);
    return NextResponse.json({ error: 'Failed to read images directory' }, { status: 500 });
  }
}
