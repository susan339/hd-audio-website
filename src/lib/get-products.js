import fs from 'fs';
import path from 'path';

const productsDirectory = path.join(process.cwd(), 'content/products');

export function getProducts() {
  const fileNames = fs.readdirSync(productsDirectory);
  const allProductsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getProductBySlug(slug);
    });
  return allProductsData;
}

export function getProductBySlug(slug) {
  const fullPath = path.join(productsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Simple frontmatter parser
  const match = fileContents.match(/^---([\s\S]*?)---([\s\S]*)$/);
  const frontmatterRaw = match ? match[1] : '';
  const content = match ? match[2] : fileContents;

  const data = { specs: [] };
  frontmatterRaw.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value.length) {
      const trimmedKey = key.trim();
      const trimmedValue = value.join(':').trim().replace(/^"(.*)"$/, '');
      
      if (trimmedKey === 'specs') {
        // Just initialize, don't overwrite if already there
      } else if (line.trim().startsWith('- label:')) {
        const label = line.split('label:')[1].trim().replace(/^"(.*)"$/, '');
        data.specs.push({ label, value: '' });
      } else if (line.trim().startsWith('value:')) {
        const val = line.split('value:')[1].trim().replace(/^"(.*)"$/, '');
        if (data.specs.length > 0) {
          data.specs[data.specs.length - 1].value = val;
        }
      } else {
        data[trimmedKey] = trimmedValue;
      }
    }
  });

  return {
    slug,
    title: data.title || '',
    category: data.category || '',
    image: data.image || '',
    specs: data.specs || [],
    content: content.trim(),
  };
}
