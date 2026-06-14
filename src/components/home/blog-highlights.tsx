"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  summary: string;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The future of AI in business automation",
    summary:
      "How modern AI is reshaping operational workflows across industries — and the patterns that actually compound.",
    thumbnail:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "Artificial Intelligence",
    slug: "future-ai-business-automation",
  },
  {
    title: "Blockchain beyond cryptocurrency",
    summary:
      "From supply chain to digital identity — the unflashy applications of blockchain that are quietly working at scale.",
    thumbnail:
      "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    category: "Blockchain",
    slug: "blockchain-beyond-cryptocurrency",
  },
  {
    title: "Building scalable web applications",
    summary:
      "Best practices and modern frameworks for shipping web applications that hold up under real load.",
    thumbnail:
      "https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg",
    author: "David Kim",
    date: "Dec 10, 2024",
    category: "Web Engineering",
    slug: "building-scalable-web-applications",
  },
  {
    title: "The rise of progressive web apps",
    summary:
      "How PWAs are bridging the gap between web and mobile, offering native-grade experiences without the App Store overhead.",
    thumbnail:
      "https://images.pexels.com/photos/7567591/pexels-photo-7567591.jpeg",
    author: "Emily Rodriguez",
    date: "Dec 8, 2024",
    category: "Mobile",
    slug: "rise-progressive-web-apps",
  },
];

export default function BlogHighlights() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="eyebrow">Field notes</span>
            <h2 className="fluid-h2 text-white mt-6 text-balance">
              Latest{" "}
              <span className="font-serif-italic brand-gradient">insights.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-200 font-medium group self-start sm:self-end"
          >
            All articles
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass mb-5">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050308]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] glass-strong text-amber-200">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-white/40 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{post.author}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-[13.5px] text-white/55 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
