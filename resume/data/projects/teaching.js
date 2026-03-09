// AI 智能教学平台
export default {
    id: "teaching",
    link: "https://jadesnow7.github.io/graduationDesign/",
    featured: true,
    tagStyle: "",
    tag: { zh: "全栈", en: "Full-stack" },
    title: {
        zh: "AI 智能教学平台",
        en: "AI-powered Teaching Platform",
    },
    showIn: ["all", "ai", "client", "fullstack", "server", "frontend"],
    descriptions: {
        // ─── Default / Fullstack ─────────────────────────────────────────────
        default: {
            zh: {
                meta: "本科毕业设计 · 独立全栈开发 · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将以课程为中心的传统教学平台重构为学生中心的 AI 教学系统，支撑桌面端、企业微信 H5 与移动端统一协同，在华中科技大学课程试点覆盖 200+ 研究生，稳定支持 30+ 并发用户</li><li><strong>架构取舍</strong>：原方案将学情状态散落在课程维度表结构中，无法支撑跨课程追踪与个性化干预；因此重建学生画像、学习档案与长期学情模型，并将 React 前端、Go 服务与 Python AI 服务拆为可独立演进的三层系统</li><li><strong>AI 机制</strong>：为降低专业问答 hallucination 与检索错配，放弃仅靠关键词/向量召回的轻量方案，引入 Qwen3 + GraphRAG + Tool Calling，把知识点检索、学情查询与建议生成拆成可追踪链路，AI 答疑准确率提升至 85%+</li><li><strong>工程落地</strong>：围绕作业批改与高频答疑设计 Redis 缓存、异步数据同步与 Docker Compose 一键部署，兼顾教师试点环境的低运维成本与跨端交付效率，作业批改覆盖 80% 常见题型</li><li><strong>技术栈</strong>：Vite/React/TypeScript/Tauri · Go/Gin/GORM · Python/FastAPI · Redis · MySQL/MinIO · Docker Compose · Qwen3 · GraphRAG · NPU acceleration</li>`,
            },
            en: {
                meta: "Undergraduate Thesis · Full-stack Developer · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Rebuilt a course-centric teaching platform into a student-centric AI learning system spanning desktop, WeCom H5, and mobile clients; the pilot covered 200+ graduate students at HUST and remained stable under 30+ concurrent users</li><li><strong>Trade-off</strong>: The original schema scattered learning state across course-level tables, which broke cross-course tracking and personalized intervention; replaced it with student profiles, learning portfolios, and long-horizon learning records, then split the system into independently evolving React, Go, and Python AI layers</li><li><strong>AI Mechanism</strong>: To reduce domain-specific hallucinations and retrieval mismatch, rejected lightweight keyword/vector-only lookup and introduced Qwen3 + GraphRAG + Tool Calling, separating knowledge retrieval, learning-state lookup, and recommendation generation into traceable steps; domain Q&amp;A accuracy reached 85%+</li><li><strong>Operational Delivery</strong>: Added Redis caching, asynchronous data synchronization, and one-command Docker Compose deployment for grading and high-frequency Q&amp;A, keeping pilot rollout lightweight while covering 80% of common assignment types</li><li><strong>Stack</strong>: Vite/React/TypeScript/Tauri · Go/Gin/GORM · Python/FastAPI · Redis · MySQL/MinIO · Docker Compose · Qwen3 · GraphRAG · NPU acceleration</li>`,
            },
        },
        // ─── Server view ──────────────────────────────────────────────────────
        server: {
            zh: {
                meta: "独立全栈开发（侧重后端架构） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：为个性化答疑、学习轨迹分析与智能批改重建教学后端，使 30+ 并发场景下的学情查询、知识检索与 AI 响应可稳定协同</li><li><strong>架构取舍</strong>：未继续沿用课程中心的单体式数据组织，因为它难以表达跨课程学情与长期记忆；转而设计学生画像、学习档案与知识检索分层模型，并将 Go/Gin 业务服务与 Python/FastAPI AI 服务解耦</li><li><strong>机制设计</strong>：围绕高频问答路径引入 Redis 缓存、异步数据同步与 Tool Calling，把学情查询、知识点召回和答案生成拆成可观测链路，降低长链路调用放大的尾延迟</li><li><strong>工程结果</strong>：Docker Compose 一键部署降低试点环境接入成本，服务在 30+ 并发目标场景下保持稳定，且为后续继续扩展推荐、批改与统计模块保留独立演进空间</li><li><strong>技术栈</strong>：Go/Gin · FastAPI · Redis · MySQL · Docker Compose</li>`,
            },
            en: {
                meta: "Full-stack Developer (Backend-focused) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Rebuilt the teaching backend for personalized Q&amp;A, learning trajectory analysis, and intelligent grading so learning-state lookup, retrieval, and AI responses remain stable under 30+ concurrent users</li><li><strong>Trade-off</strong>: Rejected the original course-centric monolithic data model because it could not represent cross-course learning state or long-term memory; replaced it with layered student profiles, learning portfolios, and retrieval domains, then decoupled Go/Gin business services from Python/FastAPI AI services</li><li><strong>Mechanism</strong>: Added Redis caching, asynchronous data synchronization, and Tool Calling around the hot Q&amp;A path so learning-state lookup, knowledge retrieval, and answer generation become observable steps instead of a single opaque long chain, reducing amplified tail latency</li><li><strong>Engineering Outcome</strong>: One-command Docker Compose deployment lowered rollout cost for the pilot environment, while the service remained stable in the 30+ concurrency target scenario and preserved room for future recommendation, grading, and analytics modules to evolve independently</li><li><strong>Stack</strong>: Go/Gin · FastAPI · Redis · MySQL · Docker Compose</li>`,
            },
        },
        // ─── AI view ──────────────────────────────────────────────────────────
        ai: {
            zh: {
                meta: "本科毕业设计 · AI 核心开发 · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：围绕高校教学场景构建学生中心的 AI 系统，把个性化答疑、智能批改与学情分析统一到可追踪的 RAG + Agent 链路中，在 200+ 研究生试点中将专业问答准确率提升至 85%+</li><li><strong>架构取舍</strong>：面对跨课程知识跳转与学生个体差异，放弃“向量检索 + 单轮 Prompt”方案，因为该方案难以处理多跳推理与学情上下文；改为 GraphRAG 组织课程知识、Tool Calling 查询学生画像与学习记录，再由 Qwen3 生成个性化回答</li><li><strong>机制设计</strong>：将检索、学情查询、答案生成与批改判定拆为可观测子步骤，并通过 Supervised Fine-Tuning 强化专业领域表达，降低 hallucination 与知识点错配；作业批改覆盖 80% 常见题型</li><li><strong>端云协同</strong>：在桌面端接入 NPU 加速本地推理，实现离线智能答疑；云端保留 FastAPI 推理服务与知识库更新链路，使本地低时延交互与中心化模型迭代能够协同演进</li><li><strong>技术栈</strong>：Qwen3 · GraphRAG · Supervised Fine-Tuning · Large Language Model Agent / Tool Calling · NPU acceleration · FastAPI · Python</li>`,
            },
            en: {
                meta: "Undergraduate Thesis · AI Core Developer · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Built a student-centric AI layer for higher education that unifies personalized Q&amp;A, grading, and learning analytics under a traceable RAG + agent pipeline; the HUST pilot covered 200+ graduate students and raised domain Q&amp;A accuracy to 85%+</li><li><strong>Trade-off</strong>: Faced with cross-course reasoning and student-specific context, rejected the common vector-retrieval + single-prompt pattern because it struggles with multi-hop reasoning and learning-state grounding; replaced it with GraphRAG for course knowledge, Tool Calling for student profiles and records, and Qwen3 for personalized responses</li><li><strong>Mechanism</strong>: Split retrieval, learning-state lookup, answer generation, and grading judgment into observable substeps, then applied Supervised Fine-Tuning to strengthen domain expression and reduce hallucination and knowledge mismatch; grading now covers 80% of common assignment types</li><li><strong>Edge-Cloud Collaboration</strong>: Added NPU-accelerated local inference on the desktop client for offline Q&amp;A, while FastAPI services and central knowledge-base updates remain in the cloud so low-latency local interaction and centralized model iteration can evolve together</li><li><strong>Stack</strong>: Qwen3 · GraphRAG · Supervised Fine-Tuning · Large Language Model Agent / Tool Calling · NPU acceleration · FastAPI · Python</li>`,
            },
        },
        // ─── Frontend view ────────────────────────────────────────────────────
        frontend: {
            zh: {
                meta: "本科毕业设计 · 独立前端开发（Vite/React/Tauri） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将教学平台前端重构为覆盖 Tauri 桌面端、企业微信 H5 与移动端的一体化交互层，在 200+ 研究生试点场景中承载学生画像、学习轨迹与 AI 对话的高频操作</li><li><strong>架构取舍</strong>：未采用页面级状态堆叠与一次性返回答案的简单方案，因为它难以支撑长文本问答、跨端共享与复杂交互；转而构建组件化 SPA，利用 React Query 管理异步状态与缓存，并统一桌面端与 Web 端的数据流语义</li><li><strong>机制设计</strong>：抽象学生画像可视化、学习轨迹热力图与 AI 对话框等核心组件，封装统一的 Server-Sent Events 流式渲染器，解决长文本答疑中首字延迟高、内容闪烁和滚动抖动的问题</li><li><strong>端侧协同</strong>：桌面端接入 NPU 加速本地推理，使离线智能答疑成为可用路径；前端通过统一状态层协调本地推理与云端服务回退，兼顾低时延体验与跨端一致性</li><li><strong>技术栈</strong>：Vite · React 18 · TypeScript · Tauri · React Query · Tailwind CSS</li>`,
            },
            en: {
                meta: "Undergraduate Thesis · Front-end Developer (Vite/React/Tauri) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Rebuilt the teaching frontend into a unified interaction layer across Tauri desktop, WeCom H5, and mobile clients, supporting high-frequency workflows around student profiles, learning trajectories, and AI dialogue in a 200+ graduate-student pilot</li><li><strong>Trade-off</strong>: Avoided page-level state sprawl and one-shot answer rendering because they break down under long-form responses, cross-platform sharing, and complex interactions; replaced them with a componentized SPA that uses React Query to unify async state and caching semantics across desktop and web</li><li><strong>Mechanism</strong>: Abstracted student profile visualizations, learning-trajectory heatmaps, and AI chat panels into reusable components, then wrapped long-form output behind a shared Server-Sent Events renderer to reduce first-token latency, content flicker, and scroll jitter</li><li><strong>Edge Coordination</strong>: Added NPU-accelerated local inference on desktop so offline Q&amp;A becomes a viable path, while the frontend state layer coordinates local execution and cloud fallback to balance low latency with cross-platform consistency</li><li><strong>Stack</strong>: Vite · React 18 · TypeScript · Tauri · React Query · Tailwind CSS</li>`,
            },
        },
        // ─── Client view ──────────────────────────────────────────────────────
        client: {
            zh: {
                meta: "本科毕业设计 · 全栈开发（侧重跨平台客户端） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将教学系统客户端重构为覆盖 Windows/macOS/Linux 桌面端、企业微信 H5 与移动端的统一交互层，使学生画像、学习轨迹与 AI 问答能够跨端连续使用</li><li><strong>架构取舍</strong>：未继续采用课程中心驱动的静态页面流，因为该模式难以承载跨课程学情追踪与端侧智能交互；转而以学生画像和学习档案为核心抽象前后端协议，并让桌面端与 Web 端共享同一套业务语义</li><li><strong>机制设计</strong>：桌面端通过 Vite + React + Tauri 承载统一代码库分发，并接入 NPU 本地推理形成离线问答能力；客户端状态层同时协调本地推理、云端知识检索与结果回填，避免多端结果不一致</li><li><strong>工程结果</strong>：平台在试点场景中稳定支持 30+ 并发用户，AI 答疑准确率达到 85%+，且 Docker Compose 一键部署显著降低了跨端联调与试点交付成本</li><li><strong>技术栈</strong>：Vite/React/TypeScript/Tauri · Go/Gin/GORM · Python/FastAPI · MySQL/MinIO · Docker Compose · Qwen3 · NPU acceleration</li>`,
            },
            en: {
                meta: "Undergraduate Thesis · Full-stack Developer (Cross-platform Client focus) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Rebuilt the teaching client into a unified interaction layer across Windows/macOS/Linux desktop, WeCom H5, and mobile clients so student profiles, learning trajectories, and AI Q&amp;A can continue seamlessly across endpoints</li><li><strong>Trade-off</strong>: Rejected the original course-centric, static page flow because it could not support cross-course learning-state tracking or edge-side intelligence; replaced it with student profiles and learning portfolios as the core protocol abstractions shared by desktop and web clients</li><li><strong>Mechanism</strong>: The desktop client uses Vite + React + Tauri for single-codebase distribution and adds NPU-accelerated local inference for offline Q&amp;A; the client state layer coordinates local execution, cloud retrieval, and result backfill to prevent cross-end inconsistency</li><li><strong>Engineering Outcome</strong>: The platform remained stable under 30+ concurrent users in the pilot scenario, Q&amp;A accuracy reached 85%+, and one-command Docker Compose deployment sharply reduced cross-client integration and rollout cost</li><li><strong>Stack</strong>: Vite/React/TypeScript/Tauri · Go/Gin/GORM · Python/FastAPI · MySQL/MinIO · Docker Compose · Qwen3 · NPU acceleration</li>`,
            },
        },
    },
};
