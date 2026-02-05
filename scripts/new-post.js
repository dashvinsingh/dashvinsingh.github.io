#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the post name from command line arguments
const postName = process.argv[2];

if (!postName) {
  console.error('Error: Please provide a post name');
  console.error('Usage: pnpm new-post <post-name>');
  console.error('Example: pnpm new-post my-blog-post');
  process.exit(1);
}

// Get current date in ISO format (YYYY-MM-DD)
const date = new Date().toISOString().split('T')[0];

// Create filename
const filename = `${date}-${postName}.mdx`;
const filepath = path.join(process.cwd(), 'app', 'blog', 'posts', filename);

// Check if file already exists
if (fs.existsSync(filepath)) {
  console.error(`Error: File already exists: ${filepath}`);
  process.exit(1);
}

// Create the frontmatter content
const content = `---
title: ''
publishedAt: ${date}
summary: ''
published: true
---

`;

// Write the file
try {
  fs.writeFileSync(filepath, content);
  console.log(`✓ Created new post: app/blog/posts/${filename}`);
  console.log(`\nNext steps:`);
  console.log(`1. Open the file and add a title`);
  console.log(`2. Add a summary`);
  console.log(`3. Write your post content`);
} catch (error) {
  console.error(`Error creating file: ${error.message}`);
  process.exit(1);
}
