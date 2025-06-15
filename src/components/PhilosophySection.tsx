import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PhilosophyCard = ({ 
  title, 
  description, 
  visual, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  visual: React.ReactNode; 
  delay?: number; 
}) => (
  <div 
    className="alchemy-card bg-card border border-border rounded-2xl p-8 space-y-6 animate-emerge"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="space-y-4">
      <h3 className="text-2xl font-alchemist font-bold text-gradient">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
    
    <div className="relative overflow-hidden rounded-xl bg-secondary/50 p-6 border border-border/50">
      {visual}
    </div>
  </div>
);

const CodeEvolutionVisual = () => (
  <div className="space-y-3">
    <div className="text-xs text-muted-foreground">输入：简单想法</div>
    <div className="font-code text-sm bg-background/50 p-3 rounded border border-primary/20">
      <span className="text-accent">// </span>
      <span className="text-foreground">创建一个个人网站</span>
    </div>
    
    <div className="flex justify-center py-2">
      <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded animate-energy-flow"></div>
    </div>
    
    <div className="text-xs text-muted-foreground">输出：完整方案</div>
    <div className="font-code text-sm bg-background/50 p-3 rounded border border-accent/20 space-y-1">
      <div><span className="text-primary">function</span> <span className="text-accent">createMasterpiece</span>() {`{`}</div>
      <div className="pl-4 text-muted-foreground">// 响应式设计 + 动画交互</div>
      <div className="pl-4 text-muted-foreground">// SEO优化 + 性能调优</div>
      <div className="pl-4 text-muted-foreground">// 个性化内容策略</div>
      <div>{`}`}</div>
    </div>
  </div>
);

const ModelComparisonVisual = () => (
  <div className="grid grid-cols-3 gap-4">
    {['GPT-4o', 'Midjourney', 'Claude'].map((model, index) => (
      <div key={model} className="text-center space-y-2">
        <div className="text-xs text-muted-foreground">{model}</div>
        <div className="w-full h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded border border-primary/30 flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
            index === 0 ? 'from-primary to-primary/70' :
            index === 1 ? 'from-accent to-accent/70' :
            'from-primary/70 to-accent'
          } animate-pulse-alchemy`} style={{ animationDelay: `${index * 0.5}s` }}></div>
        </div>
        <div className="text-xs text-primary">稳定输出 ✓</div>
      </div>
    ))}
  </div>
);

const MultiModalVisual = () => (
  <div className="grid grid-cols-3 gap-4">
    <div className="space-y-2">
      <div className="text-xs text-accent text-center">文案创作</div>
      <div className="bg-background/50 p-3 rounded border border-accent/20 h-20 flex items-center">
        <div className="text-xs text-muted-foreground leading-relaxed">
          "突破边界，重新定义可能。让AI成为你创意的放大器..."
        </div>
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="text-xs text-primary text-center">视觉设计</div>
      <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded border border-primary/20 h-20 flex items-center justify-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg animate-pulse-alchemy"></div>
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="text-xs text-accent text-center">代码实现</div>
      <div className="bg-background/50 p-3 rounded border border-accent/20 h-20 flex items-center">
        <div className="font-code text-xs text-muted-foreground">
          <div>&lt;div className=</div>
          <div>&nbsp;&nbsp;"magic"&gt;</div>
        </div>
      </div>
    </div>
  </div>
);

const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-alchemist font-bold text-gradient glow-text">
              {t('philosophy.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('philosophy.subtitle')}
            </p>
          </div>

          {/* 价值卡片网格 */}
          <div className="grid lg:grid-cols-3 gap-8">
            <PhilosophyCard
              title={t('philosophy.card1.title')}
              description={t('philosophy.card1.desc')}
              visual={<CodeEvolutionVisual />}
              delay={0.2}
            />
            
            <PhilosophyCard
              title={t('philosophy.card2.title')}
              description={t('philosophy.card2.desc')}
              visual={<ModelComparisonVisual />}
              delay={0.4}
            />
            
            <PhilosophyCard
              title={t('philosophy.card3.title')}
              description={t('philosophy.card3.desc')}
              visual={<MultiModalVisual />}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
