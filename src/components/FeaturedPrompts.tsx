
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface PromptCardProps {
  title: string;
  category: string;
  snippet: string;
  preview: string;
  color: 'primary' | 'accent' | 'secondary';
  delay?: number;
}

const PromptCard = ({ title, category, snippet, preview, color, delay = 0 }: PromptCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    primary: 'border-primary/30 hover:border-primary/60 glow-border',
    accent: 'border-accent/30 hover:border-accent/60 glow-accent',
    secondary: 'border-secondary/30 hover:border-secondary/60'
  };

  return (
    <div 
      className={`alchemy-card bg-card rounded-2xl p-6 space-y-4 border-2 transition-all duration-500 animate-emerge ${colorClasses[color]}`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 卡片头部 */}
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            color === 'primary' ? 'bg-primary/20 text-primary' :
            color === 'accent' ? 'bg-accent/20 text-accent' :
            'bg-secondary/20 text-secondary-foreground'
          }`}>
            {category}
          </span>
          {isHovered && (
            <button className="text-primary hover:text-accent transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <h3 className="text-xl font-alchemist font-bold text-foreground leading-tight">
          {title}
        </h3>
      </div>

      {/* 提示词片段 */}
      <div className="bg-background/50 border border-border/50 rounded-lg p-4">
        <div className="font-code text-sm text-muted-foreground leading-relaxed">
          {snippet}
        </div>
      </div>

      {/* 预期效果预览 */}
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">预期效果：</div>
        <div className={`rounded-lg p-4 border ${
          color === 'primary' ? 'bg-primary/5 border-primary/20' :
          color === 'accent' ? 'bg-accent/5 border-accent/20' :
          'bg-secondary/5 border-secondary/20'
        }`}>
          <div className="text-sm text-foreground">{preview}</div>
        </div>
      </div>

      {/* 悬停时显示的查看按钮 */}
      {isHovered && (
        <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg text-primary font-medium hover:from-primary/30 hover:to-accent/30 transition-all duration-300 animate-emerge">
          查看完整提示词
        </button>
      )}
    </div>
  );
};

const FeaturedPrompts = () => {
  const prompts = [
    {
      title: "AI驱动的沉浸式故事型个人站点构建法",
      category: "个人品牌",
      snippet: "# 角色设定\n你是一位擅长叙事的网站设计师...\n\n# 核心要求\n- 将个人经历转化为引人入胜的数字故事\n- 融合交互式元素增强用户体验...",
      preview: "生成具有强烈个人风格的响应式网站，包含动画交互、故事化内容布局和专业的视觉设计系统。",
      color: "primary" as const
    },
    {
      title: "电影级AI视频脚本创作框架",
      category: "AI视频",
      snippet: "# 创作框架\n## 视觉叙事层次\n1. 镜头语言设计...\n2. 情感节奏控制...\n\n## 技术参数优化\n- 镜头切换时机与逻辑...",
      preview: "输出包含详细镜头设计、情感节奏、背景音乐建议的完整视频脚本，可直接用于Runway、Sora等AI视频工具。",
      color: "accent" as const
    },
    {
      title: "高转化率产品文案生成器",
      category: "文案创作",
      snippet: "# 产品文案框架\n## 痛点挖掘公式\n用户痛点 = [当前状态] + [理想状态] + [阻碍因素]\n\n## 价值传递策略...",
      preview: "生成包含用户痛点分析、产品价值主张、情感触发点和行动召唤的高转化率销售文案。",
      color: "primary" as const
    },
    {
      title: "多平台自媒体内容矩阵策划",
      category: "内容策略",
      snippet: "# 平台特性适配\n## 小红书版本\n- 标题：生活化表达 + 情感共鸣...\n## B站版本\n- 结构：知识点层递 + 互动设计...",
      preview: "同一主题内容自动适配不同平台特性，生成小红书、B站、知乎等多平台优化版本。",
      color: "accent" as const
    },
    {
      title: "技术博客AI写作助手",
      category: "技术写作",
      snippet: "# 技术文档结构\n## 问题引入\n- 真实场景描述...\n## 解决方案\n- 渐进式展开...\n## 最佳实践\n- 可复现的代码示例...",
      preview: "输出结构清晰、代码示例完整、具有实战价值的技术博客文章，适合开发者阅读和实践。",
      color: "secondary" as const
    },
    {
      title: "AI艺术创作指导大师",
      category: "AI绘画",
      snippet: "# 艺术风格控制\n风格描述 = [艺术流派] + [色彩情绪] + [构图技法] + [光影处理]\n\n# 细节质量提升\n质量参数：ultra detailed, 8k resolution...",
      preview: "生成具有专业艺术指导水准的Midjourney/Stable Diffusion提示词，确保出图质量和风格一致性。",
      color: "accent" as const
    }
  ];

  return (
    <section id="prompts" className="py-24 bg-alchemy-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-alchemist font-bold text-gradient glow-text">
              灵感启动器：精选提示词
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              从文案创作到代码生成，从视觉设计到视频制作，探索AI创造力的无限可能
            </p>
          </div>

          {/* 提示词卡片网格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prompts.map((prompt, index) => (
              <PromptCard
                key={index}
                {...prompt}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* 底部CTA */}
          <div className="text-center mt-16">
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                探索完整提示词库
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrompts;
