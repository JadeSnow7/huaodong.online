// 故事成片：跨平台 AI 视频生成系统
export default {
    id: "story",
    link: "https://github.com/JadeSnow7/StoryToVideo",
    featured: true,
    tagStyle: "",
    tag: { zh: "全栈", en: "Full-stack" },
    title: {
        zh: "端到端 AI 视频生成系统（跨平台多模态任务平台）",
        en: "StoryToVideo: Cross-platform AI Video Generation",
    },
    // Which roles show this project
    showIn: ["all", "ai", "client", "fullstack", "server", "frontend"],
    descriptions: {
        // ─── Default / Fullstack view ─────────────────────────────────────────
        default: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长 · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将文本生成、分镜规划、图像/配音/视频推理到 FFmpeg 合成的串行工作流重构为桌面端 + 服务端协同系统，带领 5 人在 2 周内交付 MVP，并在 8GB 显存下稳定生成 30s 720p 视频</li><li><strong>架构取舍</strong>：多模态任务混跑时，常规 FIFO 队列与同步编排会放大 GPU/内存争用并拖垮尾任务；因此拆分 API 层、调度层、推理层，采用 Redis + Asynq 优先级队列与令牌桶限速，按任务类型、显存占用和时延敏感度动态调度</li><li><strong>机制设计</strong>：定义创建/执行/暂停/恢复/取消/重试/降级的统一状态机，引入 checkpoint-resume 与素材指纹缓存，避免单阶段失败触发全链路重跑，长任务恢复率 95%+，缓存复用率从 25% 提升至 65%</li><li><strong>端侧优化</strong>：针对实时预览阶段的 UI 卡顿与线程阻塞，采用 Qt/QML MVVM 分层、QThread + Signal-Slot 线程解耦与帧缓冲复用，内存峰值降低 30%，渲染帧率从 30fps 提升至 60fps</li><li><strong>技术栈</strong>：Qt/QML/C++ · Go/Gin · FastAPI · Redis/Asynq · Docker · FFmpeg · Qwen / Stable Diffusion / Stable Video Diffusion / Text-to-Speech · MySQL/MinIO</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Re-architected the serial workflow from text generation, storyboard planning, image/voice/video inference to FFmpeg composition into a desktop-service collaborative system; led 5 engineers to ship MVP in 2 weeks and sustained 30s 720p output under 8GB VRAM</li><li><strong>Trade-off</strong>: FIFO queues and synchronous orchestration amplified GPU/RAM contention and tail-task blocking under mixed multimodal workloads; replaced them with decoupled API, scheduling, and inference layers, plus Redis + Asynq priority queues and token-bucket rate limiting for workload-aware scheduling</li><li><strong>Mechanism</strong>: Defined a unified task state machine for create/run/pause/resume/cancel/retry/fallback, added checkpoint-resume and asset fingerprint caching to avoid full-pipeline reruns after single-stage failures, raising long-task recovery to 95%+ and cache reuse from 25% to 65%</li><li><strong>Client-side Performance</strong>: Eliminated preview-stage UI stalls via Qt/QML MVVM layering, QThread + signal-slot thread isolation, and frame-buffer reuse, cutting peak memory by 30% and doubling render FPS from 30 to 60</li><li><strong>Stack</strong>: Qt/QML/C++ · Go/Gin · FastAPI · Redis/Asynq · Docker · FFmpeg · Qwen / Stable Diffusion / Stable Video Diffusion / Text-to-Speech · MySQL/MinIO</li>`,
            },
        },
        // ─── Server view ──────────────────────────────────────────────────────
        server: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长（后端架构设计与开发） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将文本→分镜→图像/语音/视频生成→合成导出的多模态推理链路重构为 API、调度、推理三层解耦系统，在 8GB 显存约束下稳定支撑 30s+ 视频生成</li><li><strong>架构取舍</strong>：未采用同步 REST 直连推理和单机内存队列，因为混部场景下会放大尾任务阻塞与显存争用；转而采用 Go + Gin 接入层、Redis + Asynq 分布式优先级队列与令牌桶限速，把任务按资源画像与时延敏感度分层调度</li><li><strong>机制设计</strong>：抽象创建/执行/暂停/恢复/取消/重试/降级的统一任务状态机，并实现 checkpoint-resume 与幂等重试，避免任一子任务失败触发整链路重跑；在目标压测场景下未再出现 OOM，长任务恢复率 95%+</li><li><strong>成本优化</strong>：围绕脚本内容、分镜参数、模型配置与素材指纹构建分层缓存，减少重复 Stable Diffusion 推理与无效合成开销，缓存复用率从 25% 提升至 65%，内存峰值降低 30%</li><li><strong>技术栈</strong>：Go/Gin · FastAPI · Redis/Asynq · Docker · MySQL · MinIO</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead (Backend Architecture) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Rebuilt the multimodal inference chain from text, storyboard, image/voice/video generation to composition export into decoupled API, scheduling, and inference layers, sustaining 30s+ generation under an 8GB VRAM ceiling</li><li><strong>Trade-off</strong>: Rejected synchronous REST-to-inference calls and in-memory FIFO queues because they magnified tail latency and VRAM contention under mixed workloads; introduced Go + Gin ingress, Redis + Asynq distributed priority queues, and token-bucket rate limiting for resource-aware scheduling</li><li><strong>Mechanism</strong>: Standardized the full task lifecycle across create/run/pause/resume/cancel/retry/fallback, then added checkpoint-resume and idempotent retries to prevent full-pipeline reruns after single-stage failures; no OOM reappeared in the target stress scenario and long-task recovery reached 95%+</li><li><strong>Cost Control</strong>: Added layered caching over script content, storyboard parameters, model configuration, and asset fingerprints to cut repeated Stable Diffusion inference and redundant composition, improving cache reuse from 25% to 65% while lowering peak memory by 30%</li><li><strong>Stack</strong>: Go/Gin · FastAPI · Redis/Asynq · Docker · MySQL · MinIO</li>`,
            },
        },
        // ─── Client view ──────────────────────────────────────────────────────
        client: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长（客户端/多模态） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将跨平台桌面端从“提交任务后等待结果”的弱交互工具重构为支持实时分镜编辑、进度反馈、断点恢复与视频导出的 AI 生成工作台，在 2 周内完成 MVP 并将预览帧率从 30fps 提升至 60fps</li><li><strong>架构取舍</strong>：直接在 UI 线程轮询推理状态与刷新预览会导致长任务场景下界面冻结；因此采用 Qt/QML MVVM 分层、QThread + Signal-Slot 解耦交互线程与计算线程，并将任务状态、预览帧和导出链路拆成可独立刷新的异步模块</li><li><strong>机制设计</strong>：统一创建/暂停/恢复/取消/重试的任务协议，前端仅消费可追踪的状态流与增量结果，避免页面级状态纠缠；结合帧缓冲复用与异步回填，让多模态实时预览在长任务下仍保持可操作性</li><li><strong>协同优化</strong>：客户端侧按资源压力触发任务降级与后端限流协作，减少显存争用导致的卡顿与失败，长任务恢复率 95%+，内存峰值降低 30%，缓存复用率从 25% 提升至 65%</li><li><strong>技术栈</strong>：Qt/QML/C++ · Go/Gin · FastAPI · Redis/Asynq · Docker · FFmpeg · Qwen / Stable Diffusion / Stable Video Diffusion / Text-to-Speech</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead (Client/Multimodal) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Turned the cross-platform desktop client from a fire-and-forget submission tool into an AI production workbench with real-time storyboard editing, progress feedback, checkpoint recovery, and export; shipped MVP in 2 weeks and raised preview FPS from 30 to 60</li><li><strong>Trade-off</strong>: Polling inference state and refreshing previews on the UI thread caused freezes during long-running jobs; replaced that with Qt/QML MVVM layering, QThread + signal-slot isolation, and separately refreshable async modules for task state, preview frames, and export pipelines</li><li><strong>Mechanism</strong>: Standardized task semantics for create/pause/resume/cancel/retry so the client consumes traceable state streams and incremental outputs instead of tangled page-level state; combined frame-buffer reuse and async backfill to keep multimodal previews interactive under long jobs</li><li><strong>Coordinated Optimization</strong>: The client collaborates with backend throttling and fallback strategies under resource pressure, reducing stalls and failures from VRAM contention; long-task recovery reached 95%+, peak memory fell 30%, and cache reuse improved from 25% to 65%</li><li><strong>Stack</strong>: Qt/QML/C++ · Go/Gin · FastAPI · Redis/Asynq · Docker · FFmpeg · Qwen / Stable Diffusion / Stable Video Diffusion / Text-to-Speech</li>`,
            },
        },
        // ─── AI view ──────────────────────────────────────────────────────────
        ai: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长（多模态 AI 核心开发） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将“文本直接生成视频”的粗放式流程重构为脚本理解、结构化分镜、提示词编译、多模型执行和视频合成五阶段链路，在 8GB 显存下稳定生成 30s 720p 视频，并降低脚本与画面漂移</li><li><strong>架构取舍</strong>：放弃单轮大模型自由生成长视频脚本的方案，因为该方案在长文本场景下容易放大 hallucination、分镜跳变和角色设定不一致；改为由 Qwen 先生成结构化分镜，再驱动 Stable Diffusion、Stable Video Diffusion 与 Text-to-Speech 分阶段执行</li><li><strong>机制设计</strong>：将 Prompt 编译、模型调用、素材落盘与合成导出纳入统一任务抽象，结合 Redis + Asynq 优先级调度、令牌桶限速与缓存复用，在异构模型混部场景下控制显存竞争，内存峰值降低 30%</li><li><strong>工程结果</strong>：FastAPI 推理服务支持多模型并行编排与断点恢复，长任务恢复率 95%+；分层缓存减少重复 Stable Diffusion 推理，缓存复用率从 25% 提升至 65%，同时把端侧预览帧率从 30fps 提升至 60fps</li><li><strong>技术栈</strong>：Qwen · Stable Diffusion · Stable Video Diffusion · Text-to-Speech · FastAPI · Go/Gin · Redis/Asynq · Docker · FFmpeg</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead (Multimodal AI Core) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Replaced the coarse “text directly to video” flow with a five-stage pipeline covering script understanding, structured storyboard generation, prompt compilation, model execution, and composition export, sustaining 30s 720p output under 8GB VRAM while reducing script-scene drift</li><li><strong>Trade-off</strong>: Rejected single-pass free-form LLM generation for long videos because it amplified hallucinations, scene jumps, and character inconsistency; instead Qwen produces structured storyboards that drive Stable Diffusion, Stable Video Diffusion, and Text-to-Speech in separate stages</li><li><strong>Mechanism</strong>: Unified prompt compilation, model invocation, asset persistence, and composition export under one task abstraction, then combined Redis + Asynq priority scheduling, token-bucket throttling, and cache reuse to control VRAM contention across heterogeneous model workloads, lowering peak memory by 30%</li><li><strong>Engineering Outcome</strong>: FastAPI inference services support multi-model orchestration and checkpoint recovery, lifting long-task recovery to 95%+; layered caching reduced repeated Stable Diffusion runs, improving cache reuse from 25% to 65%, while client preview FPS improved from 30 to 60</li><li><strong>Stack</strong>: Qwen · Stable Diffusion · Stable Video Diffusion · Text-to-Speech · FastAPI · Go/Gin · Redis/Asynq · Docker · FFmpeg</li>`,
            },
        },
        // ─── Frontend view ────────────────────────────────────────────────────
        frontend: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长（QML/C++ UI 核心开发） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将跨平台桌面端打造成支持实时分镜编辑、任务追踪、预览导出一体化的 AI 视频工作台，原生体验下把实时预览帧率从 30fps 提升至 60fps，并在 2 周内完成 MVP</li><li><strong>架构取舍</strong>：放弃把任务轮询、预览刷新和导出状态堆叠在单页面状态树中的常规做法，采用 Qt/QML 的 MVVM 分层，把进度流、预览流和操作命令拆成独立数据通道，降低状态耦合与组件回流成本</li><li><strong>机制设计</strong>：通过 QThread + Signal-Slot 隔离渲染线程与计算线程，并为暂停/恢复/取消等破坏性操作定义统一确认与状态回滚语义，避免长任务场景下 UI 假死和多线程竞争</li><li><strong>工程结果</strong>：帧缓冲复用与增量刷新让多模态实时预览在资源紧张场景下仍保持流畅，配合统一组件规范与 CI/CD 流程，使 5 人协作下的跨端交付节奏稳定可控</li><li><strong>技术栈</strong>：Qt 6 / QML / C++ · MVVM · FFmpeg 渲染 · Go/Gin 后端对接</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead (QML/C++ UI Core) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Shaped the cross-platform desktop client into an AI video workstation that combines storyboard editing, task tracking, preview, and export in one native workflow, improving live preview from 30 to 60 FPS and shipping MVP in 2 weeks</li><li><strong>Trade-off</strong>: Avoided the common approach of piling polling, preview refresh, and export state into a single page-level store; instead adopted Qt/QML MVVM layering and split progress streams, preview streams, and command channels to reduce state coupling and UI churn</li><li><strong>Mechanism</strong>: Isolated rendering and compute paths with QThread + signal-slot, then defined consistent confirmation and rollback semantics for pause/resume/cancel so long-running jobs do not turn into frozen UI states or thread contention bugs</li><li><strong>Engineering Outcome</strong>: Frame-buffer reuse and incremental refresh kept multimodal previews smooth under resource pressure, while unified component conventions and CI/CD stabilized collaboration and cross-platform delivery for a 5-person team</li><li><strong>Stack</strong>: Qt 6 / QML / C++ · MVVM · FFmpeg rendering · Go/Gin backend integration</li>`,
            },
        },
        // ─── System view ──────────────────────────────────────────────────────
        system: {
            zh: {
                meta: "字节剪映 · 工程营实习生小组长（C++/Qt 系统层开发） · 2025.11 - 至今",
                points: `<li><strong>项目定位</strong>：将 Qt/C++ 跨平台视频生成系统从“前端壳 + 后端推理”重构为深度感知资源压力的桌面端协同系统，在 Linux/Windows 环境下稳定承载长任务生成</li><li><strong>系统取舍</strong>：未采用计算与交互共享事件循环的常规模式，因为该模式会在长任务、轮询和预览回刷叠加时放大线程阻塞；改为在 Qt 事件循环之上定义异步任务调度框架，并通过 QThread + Signal-Slot 隔离 UI 与计算线程</li><li><strong>资源治理</strong>：围绕 GPU/内存竞争建立优先级队列、令牌桶限速与帧缓冲复用三层治理机制，使多模态混部任务在 8GB 显存目标场景下不再出现 OOM，内存峰值降低 30%，渲染帧率从 30fps 提升至 60fps</li><li><strong>恢复机制</strong>：客户端与 Go/FastAPI 推理侧通过可恢复任务协议协作，支持异步结果拉取、断点续跑与失败补偿，长任务恢复率提升至 95%+</li><li><strong>技术栈</strong>：C++ 17 / Qt 6 / QML / QThread · FFmpeg · Linux/Windows 跨平台</li>`,
            },
            en: {
                meta: "ByteDance CapCut Bootcamp · Team Lead (C++/Qt Systems) · 2025.11 - Present",
                points: `<li><strong>Overview</strong>: Reworked the Qt/C++ cross-platform generator from a thin frontend shell into a desktop system that reacts to resource pressure, keeping long-running generation stable across Linux and Windows targets</li><li><strong>Systems Trade-off</strong>: Avoided the common model where compute work and interaction share one event loop because long jobs, polling, and preview repainting would amplify thread blocking; instead built an async scheduler on top of the Qt event loop and isolated UI and compute paths via QThread + signal-slot</li><li><strong>Resource Governance</strong>: Combined priority queues, token-bucket throttling, and frame-buffer reuse to manage GPU/RAM contention so mixed multimodal jobs stopped triggering OOM in the 8GB VRAM target scenario, peak memory dropped 30%, and render FPS improved from 30 to 60</li><li><strong>Recovery Protocol</strong>: The client and Go/FastAPI inference services cooperate through a recoverable task contract that supports async result pulling, checkpoint resume, and failure compensation, pushing long-task recovery to 95%+</li><li><strong>Stack</strong>: C++ 17 / Qt 6 / QML / QThread · FFmpeg · Linux/Windows cross-platform</li>`,
            },
        },
    },
};
