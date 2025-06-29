 import { BlogResponse } from "./utils/types";

export const mockBlogs: BlogResponse = {
  success: true,
  data: [
  {
    id: "1",
    title: "How to Get Started with Next.js",
    blog_image: "https://images.unsplash.com/photo-1",
    description: "A beginner's guide to building server-rendered React applications using Next.js."
  },
  {
    id: "2",
    title: "10 Tips to Improve JavaScript Performance",
    blog_image: "https://images.unsplash.com/photo-2",
    description: "Explore practical tips to write faster and more efficient JavaScript code."
  },
  {
    id: "3",
    title: "Understanding TypeScript Generics",
    blog_image: "https://images.unsplash.com/photo-3",
    description: "Learn how to make your TypeScript code more flexible and reusable with generics."
  },
  {
    id: "4",
    title: "Mastering CSS Flexbox and Grid",
    blog_image: "https://images.unsplash.com/photo-4",
    description: "A comprehensive guide to layout design using modern CSS techniques."
  },
  {
    id: "5",
    title: "Deploy Your Full-Stack App on Vercel",
    blog_image: "https://images.unsplash.com/photo-5",
    description: "Step-by-step instructions for deploying your frontend and backend apps using Vercel."
  }
]
};
