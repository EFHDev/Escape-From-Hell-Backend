const fetch = require('node-fetch-commonJS');
const fs = require('fs');
const path = require('path');
const { createExtractorFromData } = require('node-unrar-js');

const downloadReleaseTag = async (owner, repo, tag, filename) => {
  const url = `https://github.com/${owner}/${repo}/releases/download/${tag}/${filename}.rar`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download release tag: ${response.status} ${response.statusText}`);
  }

  const fileBuffer = await response.buffer();
  fs.writeFileSync(path.join(__dirname, '..', `${filename}.rar`), fileBuffer);

  console.log(`Downloaded ${filename}.rar`);

  const extractor = await createExtractorFromData({ data: fileBuffer });

  const list = extractor.getFileList();
  const fileHeaders = [...list.fileHeaders];

  fileHeaders.forEach((header) => {
    console.log(`Extracting ${header.name}`);
    const extractPath = path.join(__dirname, '..', header.name);
    const extracted = extractor.extract({ files: [header.name] });
    const files = [...extracted.files];
    files.forEach((file) => {
      fs.writeFileSync(extractPath, file.extraction);
    });
  });

  console.log(`Extraction complete`);
};

module.exports = downloadReleaseTag;