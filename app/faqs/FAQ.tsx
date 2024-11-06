'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

type CategoryData = {
  category: string;
  items: FAQItem[];
};

type FAQProps = {
  faqData: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Transform flat FAQ data into categorized structure
  // const categorizedData: CategoryData[] = useMemo(() => [{
  //   category: "General",
  //   items: faqData || []
  // }], [faqData]);

  // use categories from your markdown
  const categorizedData: CategoryData[] = useMemo(() => {
    const groupedByCategory = faqData.reduce((acc, item) => {
      const category = item.category || "General";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {} as Record<string, FAQItem[]>);

    return Object.entries(groupedByCategory).map(([category, items]) => ({
      category,
      items
    }));
  }, [faqData]);
  
  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return categorizedData;

    const query = searchQuery.toLowerCase();
    return categorizedData.map(category => ({
      ...category,
      items: category.items.filter(
        item =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      )
    })).filter(category => category.items.length > 0);
  }, [searchQuery, categorizedData]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      {/* TODO */}
      {/* <h1 className="text-3xl font-bold mb-8">よくある質問</h1> */}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="よくある質問をキーワードで検索 . . ."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4
            font-zen-antique
            ">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* No Results Message */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            キーワードに該当する質問は見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;