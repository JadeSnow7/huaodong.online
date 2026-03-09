export default {
    id: "client",
    label: { zh: "客户端", en: "Client" },
    zh: {
        summary: "客户端工程师，面向桌面端复杂交互与长任务工作流，擅长在 Qt/QML 与 Tauri 场景下处理渲染流畅度、线程解耦、资源占用与跨平台交付问题。能够把多阶段推理或系统能力封装成可恢复、可追踪、可操作的客户端体验。",
        tags: '<span class="core-tag primary">Qt 6 / QML</span><span class="core-tag primary">Tauri</span><span class="core-tag">FFmpeg</span><span class="core-tag">跨平台桌面</span><span class="core-tag">多线程调度</span><span class="core-tag">实时预览</span>',
        skills: {
            lang: { label: "语言与框架", value: "C++17、Qt 6 / QML、TypeScript、React 18、Tauri、FFmpeg" },
            ui: { label: "交互与架构", value: "MVVM、组件拆分、异步状态流、任务状态机、增量刷新、错误回滚" },
            platform: { label: "平台能力", value: "Windows / macOS / Linux 跨平台、桌面端打包分发、IPC、文件系统与媒体处理" },
            perf: { label: "性能治理", value: "QThread、Signal-Slot、帧缓冲复用、长任务恢复、内存占用控制、卡顿排查" },
            toolchain: { label: "工程工具", value: "CMake、Vite、Git、CI/CD、日志与性能分析" },
        },
    },
    en: {
        summary: "Client engineer focused on complex desktop interactions and long-running workflows, with hands-on work in Qt/QML and Tauri to solve rendering smoothness, thread isolation, resource pressure, and cross-platform delivery. Packages multi-stage inference and system capabilities into recoverable, traceable user-facing workflows.",
        tags: '<span class="core-tag primary">Qt 6 / QML</span><span class="core-tag primary">Tauri</span><span class="core-tag">FFmpeg</span><span class="core-tag">Cross-platform Desktop</span><span class="core-tag">Multi-thread Scheduling</span><span class="core-tag">Real-time Preview</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "C++17, Qt 6 / QML, TypeScript, React 18, Tauri, FFmpeg" },
            ui: { label: "Interaction/Architecture", value: "MVVM, component decomposition, async state streams, task state machines, incremental refresh, failure rollback" },
            platform: { label: "Platform Capabilities", value: "Windows / macOS / Linux delivery, desktop packaging, IPC, file systems, media processing" },
            perf: { label: "Performance/Resilience", value: "QThread, signal-slot, frame-buffer reuse, long-task recovery, memory control, stall diagnosis" },
            toolchain: { label: "Tooling", value: "CMake, Vite, Git, CI/CD, logging, performance profiling" },
        },
    },
};
