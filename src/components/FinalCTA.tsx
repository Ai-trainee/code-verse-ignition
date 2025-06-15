
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-alchemy-gradient relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* 主标题 */}
          <div className="space-y-6 animate-emerge">
            <h2 className="text-5xl lg:text-7xl font-alchemist font-bold leading-tight">
              <span className="block text-gradient glow-text">
                你的下一个伟大创造，
              </span>
              <span className="block text-foreground">
                始于一个更好的
              </span>
              <span className="block text-gradient glow-text">
                提示词。
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              停止在低效的指令中内耗。立即开始探索我的提示词宇宙，释放你和AI的全部潜能。
            </p>
          </div>

          {/* 价值点强调 */}
          <div className="grid md:grid-cols-3 gap-8 py-12 animate-emerge" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-primary">效率提升10倍</h3>
              <p className="text-muted-foreground">精准的提示词让AI理解更准确，输出更符合期望</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
                <div className="text-2xl">💎</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-accent">质量大幅提升</h3>
              <p className="text-muted-foreground">经过千锤百炼的框架，确保每次输出都是精品</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-primary">持续学习成长</h3>
              <p className="text-muted-foreground">加入活跃社群，与顶尖AI实践者交流学习</p>
            </div>
          </div>

          {/* 主要行动召唤 */}
          <div className="space-y-6 animate-emerge" style={{ animationDelay: '0.6s' }}>
            <button className="group px-12 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-xl rounded-2xl relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                立即加入知识星球，解锁全部提示词
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              {/* 发光效果 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>500+ 会员已加入</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>30天无理由退款</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>持续更新</span>
              </div>
            </div>
          </div>

          {/* 紧迫感元素 */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-2xl mx-auto animate-emerge" style={{ animationDelay: '0.9s' }}>
            <div className="space-y-3">
              <div className="text-primary font-medium">🔥 限时优惠</div>
              <div className="text-foreground">
                前100名加入者享受早鸟价格，错过就要等下次开放了
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>原价 ¥299</span>
                <span className="text-primary font-bold text-lg">现价 ¥199</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded">节省 ¥100</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
