
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const AlchemyAnimation = () => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-primary rounded-full opacity-70"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animation: 'float-particles 3s ease-in-out infinite'
      }}
    />
  ));

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* 背景粒子 */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>
      
      {/* 中央炼金圆环 */}
      <div className="relative">
        <div className="w-64 h-64 rounded-full border-2 border-primary/30 animate-pulse-alchemy">
          <div className="w-full h-full rounded-full border border-accent/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              {/* 动态文本 */}
              <div className="h-12 flex items-center justify-center">
                {animationStep === 0 && (
                  <span className="font-code text-primary text-sm animate-emerge">
                    {"// 创建精美网站"}
                  </span>
                )}
                {animationStep === 1 && (
                  <span className="font-code text-accent text-sm animate-emerge">
                    {"AI.generateMasterpiece()"}
                  </span>
                )}
                {animationStep === 2 && (
                  <span className="text-2xl animate-emerge">🎨</span>
                )}
                {animationStep === 3 && (
                  <span className="text-primary font-alchemist text-lg animate-emerge glow-text">
                    GENESIS
                  </span>
                )}
              </div>
              
              {/* 能量流动效果 */}
              <div className="relative w-32 h-1 bg-border rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-energy-flow"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 外圈能量环 */}
        <div className="absolute -inset-8 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]">
          <div className="w-4 h-4 bg-primary rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 glow-border"></div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-alchemy-gradient overflow-hidden">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMjIwIDIwJSAxNSUpIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-alchemist font-bold leading-tight">
                  <span className="block text-gradient glow-text animate-emerge">
                    超越指令，
                  </span>
                  <span className="block text-foreground animate-emerge" style={{ animationDelay: '0.2s' }}>
                    开启AI的
                  </span>
                  <span className="block text-gradient glow-text animate-emerge" style={{ animationDelay: '0.4s' }}>
                    无限可能。
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-emerge" style={{ animationDelay: '0.6s' }}>
                  这里不是简单的提示词列表，而是我作为一名
                  <span className="text-primary font-medium"> AIGC技术实践者</span>，
                  探索、打磨并验证过的"宇宙起点"。每一个提示词，都是一个开启AI创造力新维度的钥匙。
                </p>
              </div>

              {/* CTA按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4 animate-emerge" style={{ animationDelay: '0.8s' }}>
                <button className="group px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    探索提示词宇宙
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-secondary hover:border-primary/50 transition-all duration-300">
                  了解我的创作哲学
                </button>
              </div>

              {/* 统计数据 */}
              <div className="flex gap-8 pt-8 animate-emerge" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">精心调试的提示词</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50k+</div>
                  <div className="text-sm text-muted-foreground">社群成员使用</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">成功率提升</div>
                </div>
              </div>
            </div>

            {/* 右侧炼金动画 */}
            <div className="flex justify-center animate-emerge" style={{ animationDelay: '0.4s' }}>
              <AlchemyAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
