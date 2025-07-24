const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

async function createIco() {
  try {
    const pngFiles = [
      path.join(__dirname, '../public/favicon-16x16.png'),
      path.join(__dirname, '../public/favicon-32x32.png')
    ];

    const ico = await pngToIco(pngFiles);
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);
    
    console.log('✅ favicon.ico created successfully!');
  } catch (error) {
    console.error('❌ Error creating ICO file:', error);
  }
}

createIco(); 