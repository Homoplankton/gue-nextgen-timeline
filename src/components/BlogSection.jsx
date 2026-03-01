import { Link, useParams } from 'react-router-dom';
import './BlogSection.css';

const blogPosts = [
  {
    id: 'why-gue',
    title: 'Why I Chose GUE Training',
    date: '2024-12-15',
    displayDate: 'December 15, 2024',
    excerpt: 'My journey to discovering Global Underwater Explorers and why their approach to diving resonated with me.',
    content: `When I first started diving, I didn't know much about different training agencies or philosophies. After getting my open water certification, I dove for a while with rental gear and basic skills. It was fun, but I often felt like something was missing.

Then I discovered GUE. What drew me in wasn't just the technical aspects - it was the philosophy of diving as a team sport, the emphasis on proper fundamentals, and the commitment to environmental conservation.

The DIR (Doing It Right) philosophy made sense to me. Why have different equipment configurations for different types of diving when you can have one standardized system that works for everything? Why not master the basics before moving on to more advanced diving?

GUE Fundamentals changed everything for me. The attention to detail, the focus on trim and buoyancy, the team protocols - it all clicked. For the first time, I felt like I was truly in control underwater.

If you're considering GUE training, I'd say go for it. It's challenging, but the skills you develop will serve you for your entire diving career.`
  },
  {
    id: 'drysuit-journey',
    title: 'Learning to Dive Dry',
    date: '2024-12-28',
    displayDate: 'December 28, 2024',
    excerpt: 'The challenges and rewards of transitioning from wetsuit to drysuit diving.',
    content: `The first time I put on a drysuit, I felt like I was wrestling with an alien creature. The squeeze, the buoyancy changes, the air management - it was overwhelming.

But cold water diving was my goal, and that meant drysuits were essential. The GUE Drysuit Primer gave me the foundation I needed. Learning to manage buoyancy with both the wing and the suit took practice, lots of practice.

The key breakthrough came when I stopped fighting the suit and started working with it. Understanding how air moves inside the suit, when to add gas, when to dump - it became intuitive over time.

Now I can't imagine diving without my drysuit. The thermal protection opens up diving opportunities that simply aren't possible in a wetsuit. Cold water kelp forests, ice diving, extended bottom times - all possible because of that initial investment in learning proper drysuit technique.

My advice for new drysuit divers: be patient with yourself, get proper training, and practice in controlled conditions before taking on challenging environments.`
  },
  {
    id: 'preparing-antarctica',
    title: 'Preparing for Antarctica',
    date: '2025-11-20',
    displayDate: 'November 20, 2025',
    excerpt: 'How months of preparation led up to the diving adventure of a lifetime.',
    content: `Antarctica has been on my diving bucket list since I started technical diving. The preparation for this trip has been months in the making.

Physical preparation was crucial. Cold water diving is demanding, and Antarctica would push those demands to the extreme. I increased my cardiovascular training, worked on core strength, and made sure my overall fitness was up to the challenge.

Equipment preparation was equally important. Every piece of gear needed to be tested and reliable. Redundancy wasn't just a nice-to-have - it was essential. Spare masks, backup lights, multiple thermal layers, and thoroughly serviced regulators.

Mental preparation might have been the most important aspect. Diving in extreme cold requires staying calm and focused. The meditation and visualization techniques I practiced helped enormously.

The training path through GUE - from Fundamentals to Drysuit Primer to Performance Diver to Doubles - all built toward this moment. Each course added skills and confidence that would be tested in the Southern Ocean.

Stay tuned for my post-trip reflections. I have a feeling this experience will be transformative.`
  }
];

function BlogList() {
  return (
    <div className="blog-list">
      <h1>Blog</h1>
      <p className="blog-intro">Thoughts, experiences, and lessons from my diving journey.</p>

      <div className="posts-list">
        {blogPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="post-card">
            <span className="post-date">{post.displayDate}</span>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <span className="read-more">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="blog-post">
        <div className="post-not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <Link to="/blog" className="back-link">← Back to Blog</Link>

      <article>
        <header className="post-header">
          <span className="post-date">{post.displayDate}</span>
          <h1>{post.title}</h1>
        </header>

        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <Link to="/blog" className="back-link bottom">← Back to Blog</Link>
    </div>
  );
}

function BlogSection() {
  const { postId } = useParams();

  return (
    <div className="blog-page">
      <div className="blog-container">
        {postId ? <BlogPost /> : <BlogList />}
      </div>
    </div>
  );
}

export default BlogSection;
