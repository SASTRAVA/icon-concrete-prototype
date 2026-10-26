import { useEffect } from 'react';

const baseUrl = 'https://icon-concrete-prototype.vercel.app';

export default function PageMeta({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `${baseUrl}${path}`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
    if (ogUrl) ogUrl.content = `${baseUrl}${path}`;
  }, [title, description, path]);
  return null;
}
