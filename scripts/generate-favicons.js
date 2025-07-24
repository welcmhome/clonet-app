const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../public/ghost-logo.png');
  const outputDir = path.join(__dirname, '../public');

  try {
    // Generate favicon.ico (32x32)
    await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // Generate 16x16 favicon
    await sharp(inputFile)
      .resize(16, 16)
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));

    // Generate Apple touch icon (180x180)
    await sharp(inputFile)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Generate 192x192 for Android
    await sharp(inputFile)
      .resize(192, 192)
      .png()
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

    // Generate 512x512 for Android
    await sharp(inputFile)
      .resize(512, 512)
      .png()
      .toFile(path.join(outputDir, 'android-chrome-512x512.png'));

    console.log('✅ Favicon files generated successfully!');
    console.log('Generated files:');
    console.log('- favicon-32x32.png');
    console.log('- favicon-16x16.png');
    console.log('- apple-touch-icon.png');
    console.log('- android-chrome-192x192.png');
    console.log('- android-chrome-512x512.png');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

generateFavicons(); 