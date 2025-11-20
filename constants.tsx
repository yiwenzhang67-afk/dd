import React from 'react';
import { Sparkles, Sprout, Zap } from 'lucide-react';
import { Documentary, ValueProp } from './types';

export const BRAND_NAME = "此念文化";
export const TAGLINE = "好玩 · 有趣 · 成长";

export const NAVIGATION_LINKS = [
  { name: '首页', href: '#hero' },
  { name: '平台理念', href: '#values' },
  { name: '纪录片', href: '#documentaries' },
  { name: '创始人', href: '#founder' },
  { name: '自然灵', href: '#spirit' },
];

export const VALUES: ValueProp[] = [
  {
    title: "好玩 (Fun)",
    description: "不再枯燥的说教。我们相信，当心灵感到愉悦时，智慧才会自然流淌。",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "有趣 (Interesting)",
    description: "探索世界的未知角落，发现平凡生活中的奇幻色彩。",
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "成长 (Growth)",
    description: "像树木一样扎根大地，向天空伸展。每一次思考都是一次光合作用。",
    icon: <Sprout className="w-6 h-6 text-emerald-400" />,
  },
];

export const DOCUMENTARIES: Documentary[] = [
  {
    id: '1',
    title: "深林之语",
    description: "深入未被踏足的原始森林，倾听古老树木的低语，探寻生命的起源。",
    thumbnail: "https://picsum.photos/800/450?random=10",
    duration: "45 分钟",
    tags: ["自然", "奇幻", "冥想"]
  },
  {
    id: '2',
    title: "城市中的隐士",
    description: "记录在喧嚣都市中坚持独特生活方式的人们，寻找内心的宁静。",
    thumbnail: "https://picsum.photos/800/450?random=11",
    duration: "32 分钟",
    tags: ["人文", "成长", "哲学"]
  },
  {
    id: '3',
    title: "微观奇境",
    description: "通过微距镜头，展现脚下那个庞大而不可思议的昆虫王国。",
    thumbnail: "https://picsum.photos/800/450?random=12",
    duration: "28 分钟",
    tags: ["科普", "有趣", "视觉"]
  },
  {
    id: '4',
    title: "风的旅程",
    description: "跟随季风的脚步，穿越山川湖海，见证四季更迭的壮丽诗篇。",
    thumbnail: "https://picsum.photos/800/450?random=13",
    duration: "50 分钟",
    tags: ["自然", "治愈", "旅行"]
  }
];

export const FOUNDER_INFO = {
  name: "林念 (Lin Nian)",
  title: "首席探索官 / 纪录片导演",
  bio: "曾是互联网大厂高管，因一次丛林徒步意外迷路，在与自然独处的72小时中顿悟。他创立「此念文化」，致力于用镜头捕捉那些能唤醒灵魂的瞬间。他相信，每个成年人心里都住着一个需要被大自然治愈的孩子。",
  quote: "“我们不必去远方寻找奇迹，因为生命本身就是最大的奇迹。”",
  image: "https://picsum.photos/400/500?random=20"
};