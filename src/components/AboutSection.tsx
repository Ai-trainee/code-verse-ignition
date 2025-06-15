import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialCard = ({ 
  content, 
  author, 
  role,
  delay = 0 
}: { 
  content: string; 
  author: string; 
  role: string;
  delay?: number;
}) => (
  <div 
    className="bg-card border border-border/50 rounded-xl p-6 space-y-4 alchemy-card animate-emerge"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="text-foreground/80 leading-relaxed italic">
      "{content}"
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full"></div>
      <div>
        <div className="font-medium text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      content: language === 'zh' 
        ? "这些提示词完全改变了我的工作流程。从需要几天完成的项目，现在几小时就能高质量交付。"
        : "These prompts completely transformed my workflow. Projects that used to take days can now be delivered with high quality in just hours.",
      author: language === 'zh' ? "张明" : "Michael Zhang",
      role: language === 'zh' ? "产品设计师" : "Product Designer"
    },
    {
      content: language === 'zh'
        ? "不仅仅是工具，更像是一位经验丰富的导师。每个提示词都能给我新的思路和启发。"
        : "Not just a tool, but like an experienced mentor. Every prompt gives me new ideas and inspiration.",
      author: language === 'zh' ? "李雪" : "Snow Li",
      role: language === 'zh' ? "内容创作者" : "Content Creator"
    },
    {
      content: language === 'zh'
        ? "技术深度和实用性并重，这些提示词帮我节省了大量调试时间，直接提升了项目质量。"
        : "Perfect balance of technical depth and practicality. These prompts saved me tons of debugging time and directly improved project quality.",
      author: language === 'zh' ? "王强" : "James Wang",
      role: language === 'zh' ? "前端开发工程师" : "Frontend Engineer"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-alchemist font-bold text-gradient glow-text mb-4">
              {t('about.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* 个人简介 */}
            <div className="lg:col-span-1 space-y-6 animate-emerge">
              {/* 头像 */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary via-accent to-primary rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <div className="text-4xl font-alchemist font-bold text-gradient">AI</div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
              </div>

              {/* 个人介绍 */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-alchemist font-bold text-foreground">
                  {t('about.role')}
                </h3>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    {t('about.bio.1')}
                  </p>
                  <p>
                    {t('about.bio.2')}
                  </p>
                </div>

                {/* 技能标签 */}
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {(language === 'zh' 
                    ? ['提示词工程', 'AIGC应用', '技术写作', '产品设计']
                    : ['Prompt Engineering', 'AIGC Applications', 'Tech Writing', 'Product Design']
                  ).map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 animate-emerge"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 用户评价 */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-alchemist font-bold text-center mb-8 animate-emerge" style={{ animationDelay: '0.2s' }}>
                {t('about.testimonials.title')}
              </h3>
              
              <div className="grid gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    {...testimonial}
                    delay={0.4 + index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 社群入口 */}
          <div className="mt-16 text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4 animate-emerge" style={{ animationDelay: '1s' }}>
              <h3 className="text-3xl font-alchemist font-bold text-gradient glow-text">
                {t('about.cta.title')}
              </h3>
              <p className="text-xl text-muted-foreground">
                {t('about.cta.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-emerge" style={{ animationDelay: '1.2s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  {t('about.cta.button')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </button>
              
              <div className="text-sm text-muted-foreground">
                {t('about.cta.features')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
