import { load } from 'js-yaml';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  heroImage: string;
  content: string;
}

const blogFiles = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogFiles).map(([filepath, content]) => {
    // Split content into frontmatter and markdown
    const [, frontmatter, markdown] = content.split('---\n');
    const data = load(frontmatter) as {
      title: string;
      description: string;
      pubDate: string;
      author: string;
      heroImage: string;
    };
    
    const slug = filepath.replace('/src/content/blog/', '').replace('.md', '');
    
    return {
      slug,
      content: markdown,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      author: data.author,
      heroImage: data.heroImage,
    };
  });

  return posts.sort((a, b) => 
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
}