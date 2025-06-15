
import { ArrowRight } from 'lucide-react';

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
  const testimonials = [
    {
      content: "这些提示词完全改变了我的工作流程。从需要几天完成的项目，现在几小时就能高质量交付。",
      author: "张明",
      role: "产品设计师"
    },
    {
      content: "不仅仅是工具，更像是一位经验丰富的导师。每个提示词都能给我新的思路和启发。",
      author: "李雪",
      role: "内容创作者"
    },
    {
      content: "技术深度和实用性并重，这些提示词帮我节省了大量调试时间，直接提升了项目质量。",
      author: "王强",
      role: "前端开发工程师"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-alchemist font-bold text-gradient glow-text mb-4">
              关于提示词炼金术士
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
                  AIGC技术实践者
                </h3>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    "读AI天机，写技术新事"理念的布道者。热衷于探索AI的边界，并致力于将复杂的技术转化为普通人也能轻松掌握的实战利器。
                  </p>
                  <p>
                    深度参与AIGC生态建设，拥有丰富的多模态AI应用经验，专注于提示词工程与AI工作流优化。
                  </p>
                </div>

                {/* 技能标签 */}
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {['提示词工程', 'AIGC应用', '技术写作', '产品设计'].map((skill, index) => (
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
                社群成员反馈
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
                想要获取我全部的提示词库，
              </h3>
              <p className="text-xl text-muted-foreground">
                并与数百位AI探索者一起交流成长吗？
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-emerge" style={{ animationDelay: '1.2s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  立即加入知识星球
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </button>
              
              <div className="text-sm text-muted-foreground">
                🎯 500+ 精选提示词 | 📚 专业学习路径 | 🤝 专家答疑社群
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
