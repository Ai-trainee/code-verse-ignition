
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTA = () => {
  const { t, language } = useLanguage();

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
                {t('final.title.1')}
              </span>
              <span className="block text-foreground">
                {t('final.title.2')}
              </span>
              <span className="block text-gradient glow-text">
                {t('final.title.3')}
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {t('final.subtitle')}
            </p>
          </div>

          {/* 价值点强调 */}
          <div className="grid md:grid-cols-3 gap-8 py-12 animate-emerge" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-primary">{t('final.value1.title')}</h3>
              <p className="text-muted-foreground">{t('final.value1.desc')}</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
                <div className="text-2xl">💎</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-accent">{t('final.value2.title')}</h3>
              <p className="text-muted-foreground">{t('final.value2.desc')}</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-alchemist font-bold text-primary">{t('final.value3.title')}</h3>
              <p className="text-muted-foreground">{t('final.value3.desc')}</p>
            </div>
          </div>

          {/* 主要行动召唤 */}
          <div className="space-y-6 animate-emerge" style={{ animationDelay: '0.6s' }}>
            <button className="group px-12 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-xl rounded-2xl relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10 flex items-center gap-3">
                {t('final.cta.button')}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              {/* 发光效果 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>{language === 'zh' ? '500+ 会员已加入' : '500+ Members Joined'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>{language === 'zh' ? '30天无理由退款' : '30-day Money Back'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>{language === 'zh' ? '持续更新' : 'Regular Updates'}</span>
              </div>
            </div>
          </div>

          {/* 紧迫感元素 */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-2xl mx-auto animate-emerge" style={{ animationDelay: '0.9s' }}>
            <div className="space-y-3">
              <div className="text-primary font-medium">{t('final.offer.title')}</div>
              <div className="text-foreground">
                {t('final.offer.desc')}
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>{language === 'zh' ? '原价 ¥299' : 'Regular $42'}</span>
                <span className="text-primary font-bold text-lg">{language === 'zh' ? '现价 ¥199' : 'Now $28'}</span>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded">{language === 'zh' ? '节省 ¥100' : 'Save $14'}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
