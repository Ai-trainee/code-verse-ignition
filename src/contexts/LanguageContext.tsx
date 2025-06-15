
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Navigation
    'nav.prompts': '提示词分类',
    'nav.philosophy': '创作哲学',
    'nav.about': '关于我',
    'nav.join': '加入知识星球',
    
    // Hero Section
    'hero.title.1': '超越指令，',
    'hero.title.2': '开启AI的',
    'hero.title.3': '无限可能。',
    'hero.subtitle': '这里不是简单的提示词列表，而是我作为一名AIGC技术实践者，探索、打磨并验证过的"宇宙起点"。每一个提示词，都是一个开启AI创造力新维度的钥匙。',
    'hero.cta.explore': '探索提示词宇宙',
    'hero.cta.philosophy': '了解我的创作哲学',
    'hero.stats.prompts': '精心调试的提示词',
    'hero.stats.users': '社群成员使用',
    'hero.stats.success': '成功率提升',
    
    // Philosophy Section
    'philosophy.title': '核心理念与价值展示',
    'philosophy.subtitle': '每一个提示词背后，都蕴含着深度思考与实战验证的智慧结晶',
    'philosophy.card1.title': '「超越式创作」理念',
    'philosophy.card1.desc': '我的每一个提示词都旨在「超越」而非「复制」。它们不仅告诉你「做什么」，更启发你「如何思考」，引导AI从简单的执行者，变为富有灵感的共创伙伴。',
    'philosophy.card2.title': '千锤百炼的实战性',
    'philosophy.card2.desc': '这里的每一个提示词都经过我个人在真实项目中的反复测试与优化。它们并非理论空谈，而是能切实解决问题、提升效率、并产出高质量结果的实战利器。',
    'philosophy.card3.title': '多模态适用性',
    'philosophy.card3.desc': '从生成高转化率的营销文案，到构建复杂的网站前端代码，再到创作电影级的AI视频脚本，我的提示词框架具有高度的可迁移性，覆盖文、图、代码、视频等多种模态。',
    
    // About Section
    'about.title': '关于提示词炼金术士',
    'about.role': 'AIGC技术实践者',
    'about.bio.1': '"读AI天机，写技术新事"理念的布道者。热衷于探索AI的边界，并致力于将复杂的技术转化为普通人也能轻松掌握的实战利器。',
    'about.bio.2': '深度参与AIGC生态建设，拥有丰富的多模态AI应用经验，专注于提示词工程与AI工作流优化。',
    'about.testimonials.title': '社群成员反馈',
    'about.cta.title': '想要获取我全部的提示词库，',
    'about.cta.subtitle': '并与数百位AI探索者一起交流成长吗？',
    'about.cta.button': '立即加入知识星球',
    'about.cta.features': '🎯 500+ 精选提示词 | 📚 专业学习路径 | 🤝 专家答疑社群',
    
    // Final CTA
    'final.title.1': '你的下一个伟大创造，',
    'final.title.2': '始于一个更好的',
    'final.title.3': '提示词。',
    'final.subtitle': '停止在低效的指令中内耗。立即开始探索我的提示词宇宙，释放你和AI的全部潜能。',
    'final.value1.title': '效率提升10倍',
    'final.value1.desc': '精准的提示词让AI理解更准确，输出更符合期望',
    'final.value2.title': '质量大幅提升',
    'final.value2.desc': '经过千锤百炼的框架，确保每次输出都是精品',
    'final.value3.title': '持续学习成长',
    'final.value3.desc': '加入活跃社群，与顶尖AI实践者交流学习',
    'final.cta.button': '立即加入知识星球，解锁全部提示词',
    'final.offer.title': '🔥 限时优惠',
    'final.offer.desc': '前100名加入者享受早鸟价格，错过就要等下次开放了',
    
    // Footer
    'footer.tagline': '专注于分享高质量、经过千锤百炼的AI提示词，帮助创作者释放AI的无限可能。',
    'footer.motto': '"读AI天机，写技术新事" - 让每个人都能成为AI时代的创造者',
    'footer.links.title': '快速导航',
    'footer.contact.title': '联系我',
    'footer.contact.business': '商务合作',
    'footer.copyright': '© 2024 AITrainee Prompts. All rights reserved.',
    'footer.disclaimer': '本站提供的AI提示词仅供学习交流使用，请遵守相关法律法规，合理使用AI技术'
  },
  en: {
    // Navigation
    'nav.prompts': 'Prompt Categories',
    'nav.philosophy': 'Philosophy',
    'nav.about': 'About Me',
    'nav.join': 'Join Community',
    
    // Hero Section
    'hero.title.1': 'Beyond Commands,',
    'hero.title.2': 'Unlock AI\'s',
    'hero.title.3': 'Infinite Potential.',
    'hero.subtitle': 'This isn\'t just a simple prompt list, but the "genesis points" I\'ve explored, refined, and validated as an AIGC practitioner. Each prompt is a key to unlocking new dimensions of AI creativity.',
    'hero.cta.explore': 'Explore Prompt Universe',
    'hero.cta.philosophy': 'Learn My Philosophy',
    'hero.stats.prompts': 'Refined Prompts',
    'hero.stats.users': 'Community Users',
    'hero.stats.success': 'Success Rate Boost',
    
    // Philosophy Section
    'philosophy.title': 'Core Philosophy & Value Showcase',
    'philosophy.subtitle': 'Behind every prompt lies deep thinking and battle-tested wisdom',
    'philosophy.card1.title': '「Transcendent Creation」Philosophy',
    'philosophy.card1.desc': 'Each of my prompts aims to "transcend" rather than "copy". They don\'t just tell you "what to do", but inspire you "how to think", guiding AI from a simple executor to an inspiring co-creator.',
    'philosophy.card2.title': 'Battle-Tested Practicality',
    'philosophy.card2.desc': 'Every prompt here has been repeatedly tested and optimized by me in real projects. They\'re not theoretical talk, but practical tools that can solve problems, improve efficiency, and produce high-quality results.',
    'philosophy.card3.title': 'Multi-Modal Adaptability',
    'philosophy.card3.desc': 'From generating high-conversion marketing copy to building complex website frontend code, to creating cinematic AI video scripts, my prompt frameworks have high transferability, covering text, images, code, video and more.',
    
    // About Section
    'about.title': 'About the Prompt Alchemist',
    'about.role': 'AIGC Technology Practitioner',
    'about.bio.1': 'Advocate of "Reading AI Mysteries, Writing Tech Stories" philosophy. Passionate about exploring AI boundaries and committed to transforming complex technology into practical tools anyone can master.',
    'about.bio.2': 'Deeply involved in AIGC ecosystem development, with rich multi-modal AI application experience, focusing on prompt engineering and AI workflow optimization.',
    'about.testimonials.title': 'Community Feedback',
    'about.cta.title': 'Want to access my complete prompt library,',
    'about.cta.subtitle': 'and grow together with hundreds of AI explorers?',
    'about.cta.button': 'Join Community Now',
    'about.cta.features': '🎯 500+ Selected Prompts | 📚 Professional Learning Path | 🤝 Expert Q&A Community',
    
    // Final CTA
    'final.title.1': 'Your Next Great Creation',
    'final.title.2': 'Starts with a Better',
    'final.title.3': 'Prompt.',
    'final.subtitle': 'Stop wasting energy on inefficient instructions. Start exploring my prompt universe now and unleash the full potential of you and AI.',
    'final.value1.title': '10x Efficiency Boost',
    'final.value1.desc': 'Precise prompts make AI understand more accurately and output more as expected',
    'final.value2.title': 'Significant Quality Improvement',
    'final.value2.desc': 'Battle-tested frameworks ensure every output is a masterpiece',
    'final.value3.title': 'Continuous Learning Growth',
    'final.value3.desc': 'Join active community and exchange with top AI practitioners',
    'final.cta.button': 'Join Community Now, Unlock All Prompts',
    'final.offer.title': '🔥 Limited Time Offer',
    'final.offer.desc': 'First 100 members enjoy early bird pricing, don\'t miss this opportunity',
    
    // Footer
    'footer.tagline': 'Focused on sharing high-quality, battle-tested AI prompts to help creators unleash AI\'s infinite potential.',
    'footer.motto': '"Reading AI Mysteries, Writing Tech Stories" - Empowering everyone to become creators in the AI era',
    'footer.links.title': 'Quick Navigation',
    'footer.contact.title': 'Contact Me',
    'footer.contact.business': 'Business Cooperation',
    'footer.copyright': '© 2024 AITrainee Prompts. All rights reserved.',
    'footer.disclaimer': 'AI prompts provided on this site are for learning and communication only. Please comply with relevant laws and use AI technology responsibly.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
