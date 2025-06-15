
import { Github, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 主要内容区 */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* Logo和简介 */}
            <div className="md:col-span-2 space-y-4">
              <div className="font-alchemist text-2xl font-bold">
                <span className="text-gradient">AI Genesis</span>
                <span className="text-muted-foreground ml-2">Prompts</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {t('footer.tagline')}
              </p>
              <div className="text-sm text-muted-foreground">
                {t('footer.motto')}
              </div>
            </div>

            {/* 快速链接 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">{t('footer.links.title')}</h3>
              <div className="space-y-2">
                <a href="#prompts" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.prompts')}
                </a>
                <a href="#philosophy" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.philosophy')}
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  {language === 'zh' ? '使用指南' : 'User Guide'}
                </a>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">{t('footer.contact.title')}</h3>
              <div className="space-y-3">
                <div className="text-muted-foreground">
                  <div className="text-sm">{t('footer.contact.business')}</div>
                  <div className="text-sm">contact@aigenesis.com</div>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300"
                    aria-label={language === 'zh' ? 'B站' : 'YouTube'}
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    aria-label={language === 'zh' ? '微信' : 'WeChat'}
                  >
                    <div className="text-sm font-bold">{language === 'zh' ? '微' : 'W'}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 分割线 */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              
              {/* 版权信息 */}
              <div className="flex items-center gap-4">
                <span>{t('footer.copyright')}</span>
                {language === 'zh' && (
                  <>
                    <div className="hidden md:block w-px h-4 bg-border/50"></div>
                    <span>粤ICP备xxxxxxxx号</span>
                  </>
                )}
              </div>

              {/* 附加链接 */}
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'zh' ? '服务条款' : 'Terms of Service'}
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'zh' ? '免责声明' : 'Disclaimer'}
                </a>
              </div>
            </div>
          </div>

          {/* 备案信息 */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>{t('footer.disclaimer')}</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
