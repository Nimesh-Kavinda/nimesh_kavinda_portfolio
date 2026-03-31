"use client";

import React, { useEffect, useState } from "react";
import { Github, Users, BookOpen, Star, ExternalLink, Activity } from "lucide-react";
import Image from "next/image";

export default function GithubSection() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching github data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-white font-NeueHaas border-t border-white/5 relative bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center text-white/50 animate-pulse">
            Loading GitHub Journey...
        </div>
      </section>
    );
  }

  if (!data || !data.user) return null;

  return (
    <section className="py-24 text-white font-NeueHaas border-t border-white/5 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/40 mb-3 flex items-center gap-2">
            <Github className="w-4 h-4" /> Version Control
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            GitHub <span className="text-white/35">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* User Profile Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white/[0.05] transition-colors"></div>
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <img 
                  src={data.user.avatar_url} 
                  alt={data.user.name} 
                  className="w-24 h-24 rounded-full border border-white/20 filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h3 className="text-2xl font-bold">{data.user.name}</h3>
                  <a href={data.user.html_url} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors flex items-center gap-1 mt-1 text-sm">
                    @{data.user.login} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-white/60 mb-8 leading-relaxed relative z-10 text-sm">
                {data.user.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-white/40 mb-2 text-xs uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" /> Repos
                  </div>
                  <div className="text-2xl font-mono font-bold">{data.user.public_repos}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 text-white/40 mb-2 text-xs uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" /> Followers
                  </div>
                  <div className="text-2xl font-mono font-bold">{data.user.followers}</div>
                </div>
              </div>



            </div>
          </div>

          {/* Top Visual Repos */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-white/50" /> Highlighted Repositories
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest hidden sm:block">With Previews</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.repos.slice(0, 6).map((repo: any) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group block bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-40 relative w-full border-b border-white/5 overflow-hidden bg-black/40">
                    <img 
                      src={repo.image} 
                      alt={repo.name}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg leading-tight truncate pr-4 group-hover:text-amber-400 transition-colors">{repo.name}</h4>
                      {repo.language && (
                        <span className="text-[10px] text-white/40 border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 line-clamp-2 mb-4 h-8 group-hover:text-white/70 transition-colors">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/30">
                      <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                        <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                      </span>
                      <span>{new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {data.repos.length === 0 && (
                <div className="text-white/30 py-12 text-center border border-white/5 border-dashed rounded-xl">
                    No previewable repositories found automatically. Check out my full GitHub!
                </div>
            )}
            
            <div className="mt-8 text-center sm:text-left">
                <a href={data.user.html_url + "?tab=repositories"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-white text-white/60 transition-colors border-b border-white/10 hover:border-white pb-1 pb-1">
                    View all repositories <ExternalLink className="w-3 h-3" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
