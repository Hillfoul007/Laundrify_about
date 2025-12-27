import { useEffect } from "react";

interface MetaOptions {
  title: string;
  description: string;
  keywords?: string;
}

export function useMeta(options: MetaOptions) {
  useEffect(() => {
    document.title = options.title;
    
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", options.description);
    }

    if (options.keywords) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute("content", options.keywords);
      }
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", options.title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", options.description);
    }
  }, [options.title, options.description, options.keywords]);
}
