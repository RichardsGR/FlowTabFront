// FlowTab Landing Page — i18n, Scroll Animations & Interactions

// ============================================================
// Translation Dictionary
// ============================================================
const t = {
  en: {
    'meta.title': 'FlowTab — Smart Browser Tab Manager for macOS',
    'meta.desc': 'FlowTab - Lightning-fast browser tab manager. Fuzzy search, smart dedup, one-click jump. Built with Rust + Tauri.',

    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.releases': 'Releases',
    'nav.download': 'Download',
    'nav.lang': '中文',

    'hero.badge': 'Open Source & Local-First',
    'hero.title1': 'Tame Your Browser Tabs.',
    'hero.title2': 'Find Anything Instantly.',
    'hero.subtitle': 'Press <kbd>Ctrl+K</kbd> anywhere to summon a lightning-fast search window. Fuzzy search across all your saved pages and open tabs. Smart routing automatically switches to an existing tab or opens a new one.',
    'hero.downloadBtn': 'Download for macOS',
    'hero.releasesBtn': 'View Releases',

    'mockup.placeholder': 'Search pages, tabs, bookmarks...',
    'mockup.open': 'Open',
    'mockup.switch': 'Switch',
    'mockup.open2': 'Open',

    'features.label': 'Features',
    'features.title': 'Everything you need to',
    'features.titleHL': 'master your tabs',
    'features.desc': 'FlowTab combines the speed of Spotlight with browser tab intelligence to eliminate tab clutter forever.',

    'features.f1.title': 'Global Hotkey',
    'features.f1.desc': 'Press <kbd>Ctrl+K</kbd> from any app to bring up the floating search window. It appears instantly, always on top.',
    'features.f2.title': 'Fuzzy Search + Pinyin',
    'features.f2.desc': 'Find any page by name, URL, or pinyin. Powered by nucleo, the same fuzzy-matching engine used in modern code editors.',
    'features.f3.title': 'Smart Routing',
    'features.f3.desc': 'Automatically detects if a URL is already open. Switch to the existing tab instead of creating duplicates — save memory, stay focused.',
    'features.f4.title': 'Bookmark Import',
    'features.f4.desc': 'One-click import from Chrome or Edge bookmarks. Your existing bookmark hierarchy is automatically flattened and deduplicated.',
    'features.f5.title': 'History Analysis',
    'features.f5.desc': 'Analyzes your browsing history across Chrome, Edge, Arc, and Brave to surface your most-visited sites. Top 50 frequent pages at a glance.',
    'features.f6.title': 'Smart Dedup + Theme',
    'features.f6.desc': 'Intelligent URL normalization catches duplicates (www vs non-www, trailing slashes). Beautiful frosted glass UI with automatic light/dark mode.',

    'steps.label': 'How It Works',
    'steps.title': 'Three steps to',
    'steps.titleHL': 'tab freedom',
    'steps.s1.title': 'Press <kbd>Ctrl+K</kbd>',
    'steps.s1.desc': 'Summon the floating search window from anywhere — your IDE, browser, terminal, or Finder. No need to switch context.',
    'steps.s2.title': 'Search & Find',
    'steps.s2.desc': 'Type a few characters to fuzzy-search across your indexed pages, open tabs, and browser history. Pinyin support for Chinese users.',
    'steps.s3.title': 'Jump Instantly',
    'steps.s3.desc': 'Hit Enter. FlowTab intelligently switches to an open tab or creates a new one. Zero friction, zero duplicates.',

    'browsers.label': 'Supported Browsers',
    'browsers.title': 'Works with',
    'browsers.titleHL': 'your favorite browser',
    'browsers.desc': 'Full support for Chrome and Edge on macOS, with Firefox and more coming soon.',
    'browsers.chrome.badge': 'Full Support',
    'browsers.chrome.desc': 'Tab detection, switch, close, bookmarks, history',
    'browsers.edge.badge': 'Full Support',
    'browsers.edge.desc': 'Tab detection, switch, close, bookmarks, history',
    'browsers.firefox.badge': 'Partial',
    'browsers.firefox.desc': 'Open new tabs supported; full control coming soon',
    'browsers.arc.badge': 'History Only',
    'browsers.arc.desc': 'Browsing history analysis supported',

    'tech.label': 'Tech Stack',
    'tech.title': 'Built with',
    'tech.titleHL': 'performance in mind',
    'tech.desc': 'A modern, lightweight architecture for maximum speed and minimal resource usage.',
    'tech.rust': 'Backend Engine',
    'tech.tauri': 'Desktop Framework',
    'tech.svelte': 'UI Layer',
    'tech.sqlite': 'Local Database',
    'tech.nucleo': 'Fuzzy Search',
    'tech.applescript': 'Browser Control',

    'releases.label': 'Releases',
    'releases.title': 'Version History &',
    'releases.titleHL': 'Downloads',
    'releases.desc': 'Download the latest version or browse the changelog for each release.',
    'releases.latest': 'Latest',
    'releases.prerelease': 'Pre-release',
    'releases.download': 'Download DMG',
    'releases.changelog': 'Changelog',
    'releases.v1.i1': 'Initial release — cross-platform browser tab manager',
    'releases.v1.i2': 'Global hotkey (Ctrl+K) to summon floating search window from anywhere',
    'releases.v1.i3': 'Fuzzy search with pinyin support across indexed pages and open browser tabs',
    'releases.v1.i4': 'Smart routing — auto-detect open tabs, switch or create new',
    'releases.v1.i5': 'One-click bookmark import from Chrome and Edge',
    'releases.v1.i6': 'Browsing history analysis across Chrome, Edge, Arc, Brave',
    'releases.v1.i7': 'Light/dark frosted glass theme with automatic system follow',
    'releases.v1.i8': 'Chinese/English internationalization',
    'releases.v1.i9': 'System tray integration with quick-access menu',
    'releases.v1.i10': 'Tab close and force-new actions for already-open tabs',
    'releases.v09.i1': 'Core search engine with nucleo fuzzy matching',
    'releases.v09.i2': 'Browser tab detection and switching via AppleScript',
    'releases.v09.i3': 'Bookmark parsing and history analysis',
    'releases.v09.i4': 'URL smart deduplication',
    'releases.v09.i5': 'Settings panel and page index manager',

    'download.label': 'Download',
    'download.title': 'Get FlowTab',
    'download.titleHL': 'today',
    'download.desc': 'Free and open source. Currently available for macOS 12.0+, with Windows and Linux support in development.',
    'download.mac.desc': 'Requires macOS 12.0 or later',
    'download.mac.btn': 'Download DMG',
    'download.win.title': 'Windows & Linux',
    'download.win.desc': 'Coming soon — platform support in development',
    'download.win.btn': 'Coming Soon',

    'footer.desc': 'Smart browser tab manager for macOS. Built with Rust, Tauri, and Svelte.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.howItWorks': 'How It Works',
    'footer.releases': 'Releases',
    'footer.download': 'Download',
    'footer.copyright': '© 2026 FlowTab. Open source under MIT License.',
    'footer.builtWith': 'Built with Rust + Tauri + Svelte. Privacy-first, local-only.',
  },

  zh: {
    'meta.title': 'FlowTab — 智能浏览器标签页管理器 for macOS',
    'meta.desc': 'FlowTab - 极速检索、智能去重、一键跳转的浏览器标签页管理工具。基于 Rust + Tauri 构建。',

    'nav.features': '功能',
    'nav.howItWorks': '使用方法',
    'nav.releases': '更新日志',
    'nav.download': '下载',
    'nav.lang': 'EN',

    'hero.badge': '开源 & 本地优先',
    'hero.title1': '驯服你的浏览器标签页。',
    'hero.title2': '极速检索一切。',
    'hero.subtitle': '随时随地按下 <kbd>Ctrl+K</kbd> 呼出极速搜索窗口。模糊搜索所有已保存页面和当前打开的标签页。智能路由自动切换到已有标签页或打开新页面。',
    'hero.downloadBtn': '下载 macOS 版',
    'hero.releasesBtn': '查看更新日志',

    'mockup.placeholder': '搜索页面、标签页、书签...',
    'mockup.open': '打开',
    'mockup.switch': '切换',
    'mockup.open2': '打开',

    'features.label': '核心功能',
    'features.title': '掌控标签页所需',
    'features.titleHL': '的一切',
    'features.desc': 'FlowTab 将 Spotlight 的速度与浏览器标签页智能相结合，彻底消除标签页混乱。',

    'features.f1.title': '全局快捷键',
    'features.f1.desc': '在任何应用中按下 <kbd>Ctrl+K</kbd> 呼出浮动搜索窗口。即时出现，始终置顶。',
    'features.f2.title': '模糊搜索 + 拼音',
    'features.f2.desc': '按名称、URL 或拼音查找任何页面。由 nucleo 引擎驱动，与现代代码编辑器使用相同的模糊匹配引擎。',
    'features.f3.title': '智能路由',
    'features.f3.desc': '自动检测 URL 是否已打开。切换到已有标签页而非重复创建 — 节省内存，保持专注。',
    'features.f4.title': '书签导入',
    'features.f4.desc': '一键从 Chrome 或 Edge 导入书签。自动扁平化书签层级并去重。',
    'features.f5.title': '历史分析',
    'features.f5.desc': '分析 Chrome、Edge、Arc 和 Brave 的浏览历史，展示最常访问的网站。Top 50 高频页面一目了然。',
    'features.f6.title': '智能去重 + 主题',
    'features.f6.desc': '智能 URL 规范化识别重复项（www vs 非 www、尾部斜杠）。精美的毛玻璃 UI，支持自动切换明暗主题。',

    'steps.label': '使用方法',
    'steps.title': '三步实现',
    'steps.titleHL': '标签页自由',
    'steps.s1.title': '按下 <kbd>Ctrl+K</kbd>',
    'steps.s1.desc': '从任意位置呼出浮动搜索窗口 — IDE、浏览器、终端或访达皆可。无需切换上下文。',
    'steps.s2.title': '搜索查找',
    'steps.s2.desc': '输入几个字符即可模糊搜索已索引页面、打开的标签页和浏览历史。支持拼音搜索，方便中文用户。',
    'steps.s3.title': '一键跳转',
    'steps.s3.desc': '按下回车，FlowTab 智能切换到已打开标签页或创建新标签页。零摩擦，零重复。',

    'browsers.label': '支持的浏览器',
    'browsers.title': '兼容',
    'browsers.titleHL': '你常用的浏览器',
    'browsers.desc': 'macOS 上完整支持 Chrome 和 Edge，Firefox 等更多浏览器即将推出。',
    'browsers.chrome.badge': '完整支持',
    'browsers.chrome.desc': '标签页检测、切换、关闭、书签、历史',
    'browsers.edge.badge': '完整支持',
    'browsers.edge.desc': '标签页检测、切换、关闭、书签、历史',
    'browsers.firefox.badge': '部分支持',
    'browsers.firefox.desc': '支持打开新标签页；完整控制即将推出',
    'browsers.arc.badge': '仅历史',
    'browsers.arc.desc': '支持浏览历史分析',

    'tech.label': '技术栈',
    'tech.title': '以',
    'tech.titleHL': '极致性能',
    'tech.desc': '现代轻量级架构，实现极致速度和最小资源占用。',
    'tech.rust': '后端引擎',
    'tech.tauri': '桌面框架',
    'tech.svelte': 'UI 层',
    'tech.sqlite': '本地数据库',
    'tech.nucleo': '模糊搜索',
    'tech.applescript': '浏览器控制',

    'releases.label': '更新日志',
    'releases.title': '版本历史 &',
    'releases.titleHL': '下载',
    'releases.desc': '下载最新版本或查看每个版本的更新日志。',
    'releases.latest': '最新',
    'releases.prerelease': '预发布',
    'releases.download': '下载 DMG',
    'releases.changelog': '更新日志',
    'releases.v1.i1': '首次发布 — 跨平台浏览器标签页管理器',
    'releases.v1.i2': '全局快捷键（Ctrl+K）随时随地呼出浮动搜索窗口',
    'releases.v1.i3': '模糊搜索支持拼音，覆盖已索引页面和浏览器打开的标签页',
    'releases.v1.i4': '智能路由 — 自动检测已打开标签页，切换或新建',
    'releases.v1.i5': '一键导入 Chrome 和 Edge 书签',
    'releases.v1.i6': '浏览历史分析，支持 Chrome、Edge、Arc、Brave',
    'releases.v1.i7': '明暗毛玻璃主题，支持自动跟随系统',
    'releases.v1.i8': '中英文国际化',
    'releases.v1.i9': '系统托盘集成，快捷菜单',
    'releases.v1.i10': '已打开标签页的关闭和强制新建操作',
    'releases.v09.i1': '基于 nucleo 模糊匹配的核心搜索引擎',
    'releases.v09.i2': '通过 AppleScript 实现浏览器标签页检测与切换',
    'releases.v09.i3': '书签解析与历史分析',
    'releases.v09.i4': 'URL 智能去重',
    'releases.v09.i5': '设置面板与页面索引管理',

    'download.label': '下载',
    'download.title': '立即获取',
    'download.titleHL': 'FlowTab',
    'download.desc': '免费开源。目前支持 macOS 12.0+，Windows 和 Linux 版本开发中。',
    'download.mac.desc': '需要 macOS 12.0 或更高版本',
    'download.mac.btn': '下载 DMG',
    'download.win.title': 'Windows & Linux',
    'download.win.desc': '即将推出 — 平台支持开发中',
    'download.win.btn': '敬请期待',

    'footer.desc': '智能浏览器标签页管理器 for macOS。基于 Rust、Tauri 和 Svelte 构建。',
    'footer.product': '产品',
    'footer.features': '功能',
    'footer.howItWorks': '使用方法',
    'footer.releases': '更新日志',
    'footer.download': '下载',
    'footer.copyright': '© 2026 FlowTab. 基于 MIT 许可证开源。',
    'footer.builtWith': '基于 Rust + Tauri + Svelte 构建。隐私优先，纯本地运行。',
  },
};

// ============================================================
// i18n Engine
// ============================================================
const STORAGE_KEY = 'flowtab-lang';

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  const dict = t[lang];
  if (!dict) return;

  // Update <html> lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Text content (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key === 'meta.title') {
      document.title = dict[key];
    } else if (key === 'meta.desc') {
      el.setAttribute('content', dict[key]);
    } else if (dict[key] != null) {
      el.textContent = dict[key];
    }
  });

  // HTML content (data-i18n-html) — for elements with <kbd> etc.
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) {
      el.innerHTML = dict[key];
    }
  });
}

// Lang switcher button
document.getElementById('lang-switcher').addEventListener('click', () => {
  const next = getLang() === 'en' ? 'zh' : 'en';
  setLang(next);
});

// Apply saved language on load
applyLang(getLang());

// ============================================================
// Scroll Animations
// ============================================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.feature-card, .step-card, .browser-card, .tech-item, .release-card, .download-card, .section-header'
).forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('.nav-links a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
