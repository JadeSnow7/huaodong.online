export default {
    id: "frontend",
    label: { zh: "前端", en: "Front-end" },
    zh: {
        summary: '前端工程师，专注于复杂交互、跨端桌面界面与高性能渲染，能够将 AI 产品需求抽象为可维护、可扩展的前端架构。以 TypeScript 与 React 18 为核心，擅长组件系统设计、异步数据流管理、Server-Sent Events (SSE) 流式交互与实时预览链路优化，覆盖 Web、WeCom H5 与 Tauri 桌面端。熟悉浏览器渲染机制、事件循环与工程化体系，能够系统解决首屏加载、长列表渲染、内存泄漏和跨端一致性等问题。',
        tags: '<span class="core-tag primary">React 18</span><span class="core-tag primary">TypeScript</span><span class="core-tag">Tauri / Qt</span><span class="core-tag">前端架构</span><span class="core-tag">性能调优</span><span class="core-tag">工程化体系</span>',
        skills: {
            lang: { label: "语言与框架", value: "TypeScript、JavaScript (ES6+)、HTML5、CSS3、React 18、Vue 3、Tailwind CSS" },
            arch: { label: "前端架构", value: "组件化设计、状态管理、Redux、Zustand、React Query、SWR、可维护前端分层" },
            cross: { label: "跨端与交互", value: "Tauri、Qt/QML、WeCom H5、响应式布局、Server-Sent Events (SSE)、实时预览链路" },
            perf: { label: "性能优化", value: "浏览器渲染机制、事件循环、首屏加载优化、长列表虚拟化、帧渲染优化、内存泄漏排查" },
            engineering: { label: "工程化体系", value: "Vite、Webpack、模块化构建、代码规范治理、自动化构建、CI/CD" },
        }
    },
    en: {
        summary: '<span class="highlight">Frontend Engineer</span>, focusing on <span class="highlight">cross-platform apps</span> and <span class="highlight">complex UI interactions</span>. Proficient in React ecosystem and modern Web engineering, with solid experience building native-feeling desktop apps via Tauri/Qt. Adept at component-driven architectures and performance tuning, specially experienced in AI applications and multimodal rendering.',
        tags: '<span class="core-tag primary">React / Vue</span><span class="core-tag primary">TypeScript</span><span class="core-tag">Cross-platform (Tauri/Qt)</span><span class="core-tag">Architecture</span><span class="core-tag">Performance</span><span class="core-tag">Web Tooling</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "HTML/CSS/JavaScript, TypeScript, React 18, Vue.js" },
            cross: { label: "Cross-platform", value: "Tauri for desktop apps, Qt/QML for native clients, React Native &amp; WeChat ecosystem" },
            arch: { label: "Architecture", value: "State management (Redux/Zustand), Data fetching (React Query), Component-driven design" },
            engineering: { label: "Engineering", value: "Vite/Webpack build tools, CI/CD pipelines, Frontend testing and code standard governance" },
            perf: { label: "Performance", value: "Browser rendering pipeline, Event loop, FCP optimization, SSE streaming UI, Memory leak profiling" },
        }
    }
};
