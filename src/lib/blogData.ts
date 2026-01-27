export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "10 Signs You Need Dental Implants: Expert Guide 2025",
    excerpt: "Discover the top signs that indicate you might be a good candidate for dental implants.",
    image: "/images/blog/dental-implants-signs.webp",
    date: "Nov 1, 2025",
    readTime: "5 min",
    slug: "signs-you-need-dental-implants",
    category: "Dental Implants",
    content: `Dental implants are a revolutionary solution for missing teeth. In this comprehensive guide, we'll explore the key indicators that suggest you might be an ideal candidate for dental implants. Whether you've lost teeth due to decay, injury, or other reasons, this article will help you understand if implants are right for you.`
  },
  {
    title: "Dental Implant Cost in Hyderabad: Complete Breakdown",
    excerpt: "Understand the complete cost structure of dental implants in Hyderabad.",
    image: "/images/blog/dental-implant-cost.jpg",
    date: "Oct 28, 2025",
    readTime: "7 min",
    slug: "dental-implant-cost-hyderabad",
    category: "Cost Guide",
    content: `Understanding the cost of dental implants is crucial before making your decision. This detailed breakdown covers all aspects of implant treatment costs in Hyderabad, including consultation, surgery, and aftercare.`
  },
  {
    title: "Dental Implants vs Dentures vs Bridges Comparison",
    excerpt: "Complete comparison guide of tooth replacement options with pros, cons, and costs.",
    image: "/images/blog/implants-vs-dentures-bridges.jpg",
    date: "Oct 25, 2025",
    readTime: "8 min",
    slug: "dental-implants-vs-dentures-vs-bridges",
    category: "Comparison",
    content: `When you need to replace missing teeth, you have several options. This comprehensive comparison helps you understand the differences between implants, dentures, and bridges to make the best choice for your needs.`
  },
  {
    title: "How to Care for Dental Implants: Maintenance Guide",
    excerpt: "Expert tips on cleaning and maintaining dental implants for longevity.",
    image: "/images/blog/dental-implant-care.jpg",
    date: "Oct 20, 2025",
    readTime: "6 min",
    slug: "how-to-care-for-dental-implants",
    category: "Care Tips",
    content: `Proper care is essential to ensure your dental implants last a lifetime. Learn the best practices for cleaning, maintenance, and regular check-ups to keep your implants healthy.`
  },
  {
    title: "Teeth Whitening: Professional vs At-Home Methods",
    excerpt: "Compare professional and at-home teeth whitening treatments and results.",
    image: "/images/blog/teeth-whitening-comparison.jpg",
    date: "Oct 15, 2025",
    readTime: "5 min",
    slug: "professional-vs-home-teeth-whitening",
    category: "Teeth Whitening",
    content: `Dreaming of a brighter smile? Discover the differences between professional teeth whitening and at-home methods, including effectiveness, cost, and safety considerations.`
  },
  {
    title: "Root Canal Treatment: What to Expect Step by Step",
    excerpt: "Comprehensive guide to root canal procedure including preparation and recovery.",
    image: "/images/blog/root-canal-guide.jpg",
    date: "Oct 10, 2025",
    readTime: "7 min",
    slug: "root-canal-treatment-guide",
    category: "Root Canal",
    content: `Root canal treatment can seem intimidating, but understanding the process can help ease your concerns. This step-by-step guide explains what to expect during and after the procedure.`
  },
  {
    title: "Clear Aligners vs Traditional Braces: Which is Better?",
    excerpt: "Compare Invisalign clear aligners with metal braces for cost and effectiveness.",
    image: "/images/blog/clear-aligners-vs-braces.jpg",
    date: "Oct 5, 2025",
    readTime: "6 min",
    slug: "clear-aligners-vs-braces-comparison",
    category: "Orthodontics",
    content: `Straightening your teeth has never been easier with modern orthodontic options. Compare clear aligners and traditional braces to find which option works best for your smile goals.`
  },
  {
    title: "Complete Guide to Dental Crowns and Bridges",
    excerpt: "Everything you need to know about dental crowns, bridges, and materials.",
    image: "/images/blog/crowns-bridges-guide.jpg",
    date: "Oct 1, 2025",
    readTime: "8 min",
    slug: "complete-guide-dental-crowns-bridges",
    category: "Restorative",
    content: `Dental crowns and bridges are excellent solutions for restoring damaged or missing teeth. Learn about the different materials, procedures, and long-term care requirements.`
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

