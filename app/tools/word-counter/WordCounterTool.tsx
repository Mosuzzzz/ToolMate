"use client";

import { useState, useEffect } from "react";
import { FileText, Type, Hash, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function WordCounterTool() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  });

  useEffect(() => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    
    // Count words (split by whitespace, filter empty strings)
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
    // Count sentences (split by .!?)
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Count paragraphs (split by newlines)
    const paragraphs = text.trim() === "" ? 0 : text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    
    // Reading time (average 200 words per minute)
    const readingTime = Math.ceil(words / 200);

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime,
    });
  }, [text]);

  const statCards = [
    { label: "Words", value: stats.words, icon: Type, color: "text-blue-500" },
    { label: "Characters", value: stats.characters, icon: Hash, color: "text-green-500" },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces, icon: Hash, color: "text-purple-500" },
    { label: "Sentences", value: stats.sentences, icon: FileText, color: "text-orange-500" },
    { label: "Paragraphs", value: stats.paragraphs, icon: FileText, color: "text-pink-500" },
    { label: "Reading Time (min)", value: stats.readingTime, icon: Clock, color: "text-indigo-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {statCards.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enter Your Text</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="text-input">Type or paste your text below</Label>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
              className="min-h-[300px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
