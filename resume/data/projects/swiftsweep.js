// macOS 系统优化工具
export default {
    id: "swiftsweep",
    link: "https://github.com/JadeSnow7/SwiftSweep",
    featured: false,
    tagStyle: "apple",
    tag: { zh: "Apple", en: "Apple" },
    title: {
        zh: "macOS 系统优化工具（SwiftSweep）",
        en: "macOS System Optimization Tool (SwiftSweep)",
    },
    // Which roles show this project
    showIn: ["all", "client", "system", "frontend", "fullstack"],
    descriptions: {
        default: {
            zh: {
                meta: "个人独立项目 / 开源工具 · 2024.10 - 2024.12",
                points: `<li><strong>项目定位</strong>：为解决 macOS 用户存储空间焦虑与常见清理工具高授权风险，基于 Swift 5.9 与 SwiftUI 独立开发集系统深度清理、相似文件检测与特权隔离于一体的原生维护工具（GUI + CLI），实现了 14+ 核心系统维护功能并成功完成 Apple 官方公证发布</li><li><strong>架构与安全设计</strong>：摒弃传统清理软件索要全局 root 权限的危险模式，采用 XPC Helper + SMAppService 构建进程间通信隔离层，主应用在沙盒与受限权限下运行，彻底阻断了提权漏洞攻击面；设计了 dry-run 预演、基线白名单与严格的 symlink（符号链接）逃逸检测三重防护体系，实现 100% 零误删系统核心进程数据</li><li><strong>算法与性能调优</strong>：面对数以万计的相似图片与视频检测导致的内存暴涨与 CPU 满载问题，引入基于 pHash（感知哈希）与 LSH（局部敏感哈希）降维检测算法；利用 Swift Task / Async 机制实现流式处理与内存回收，将重复媒体文件扫描速度提高了 3 倍，内存峰值控制在 200MB 以内</li><li><strong>技术栈</strong>：Swift 5.9 / SwiftUI · XPC 进程间协议通信 · SMAppService · pHash / LSH 特征匹配算法 · Swift 包管理器 (SPM) · Developer ID 证书体系与 Notarization</li>`,
            },
            en: {
                meta: "Independent Tool Developer · 2024.10 - 2024.12",
                points: `<li><strong>Overview</strong>: Developed a comprehensive macOS native system optimization tool tackling storage bloat and high-authorization risks associated with common cleaners. Built with Swift 5.9 and SwiftUI, integrated 14+ core maintenance modules including deep system cleaning and similarity detection, and successfully completed Apple's Notarization deployment process.</li><li><strong>Architecture & Security</strong>: Eliminated the hazardous practice of requiring global root access by designing an XPC Helper + SMAppService inter-process communication bridge. The main GUI operates under restricted privileges while sandboxing privileged tasks, structurally preventing privilege escalation attacks. Engineered a three-layer safeguard—dry-run staging, baseline allowlisting, and rigorous symlink escape detection—ensuring absolutely zero accidental deletion of critical OS data.</li><li><strong>Algorithms & Performance Tuning</strong>: Addressed severe CPU/Memory spikes during massive duplicate media scans by implementing pHash (Perceptual Hashing) combined with LSH (Locality-Sensitive Hashing) for dimensionality reduction. Re-architected the scanning pipeline using Swift async/await concurrency for streaming I/O and rapid memory deallocation, tripling the detection speed for duplicate media while strictly bounding peak memory usage below 200MB.</li><li><strong>Stack</strong>: Swift 5.9 / SwiftUI · XPC IPC Protocol · SMAppService · pHash / LSH Algorithms · Swift Package Manager (SPM) · Developer ID Signing & Apple Notarization</li>`,
            },
        },
    },
};