
import { Github, Youtube } from 'lucide-react';

const Footer = () => {
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
                专注于分享高质量、经过千锤百炼的AI提示词，帮助创作者释放AI的无限可能。
              </p>
              <div className="text-sm text-muted-foreground">
                "读AI天机，写技术新事" - 让每个人都能成为AI时代的创造者
              </div>
            </div>

            {/* 快速链接 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">快速导航</h3>
              <div className="space-y-2">
                <a href="#prompts" className="block text-muted-foreground hover:text-primary transition-colors">
                  提示词分类
                </a>
                <a href="#philosophy" className="block text-muted-foreground hover:text-primary transition-colors">
                  创作哲学
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  关于我
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  使用指南
                </a>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">联系我</h3>
              <div className="space-y-3">
                <div className="text-muted-foreground">
                  <div className="text-sm">商务合作</div>
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
                    aria-label="B站"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    aria-label="微信"
                  >
                    <div className="text-sm font-bold">微</div>
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
                <span>© 2024 AI Genesis Prompts. All rights reserved.</span>
                <div className="hidden md:block w-px h-4 bg-border/50"></div>
                <span>粤ICP备xxxxxxxx号</span>
              </div>

              {/* 附加链接 */}
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  隐私政策
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  服务条款
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  免责声明
                </a>
              </div>
            </div>
          </div>

          {/* 备案信息 */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>本站提供的AI提示词仅供学习交流使用，请遵守相关法律法规，合理使用AI技术</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
