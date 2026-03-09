export default {
    id: "fullstack",
    label: { zh: "全栈", en: "Full-stack" },
    zh: {
        summary: '全栈工程师，主攻 Go 服务架构与端到端产品交付，能够完成从 React/TypeScript 前端、Go 与 Python 服务到存储、中间件和部署体系的闭环设计。擅长微服务拆分、RESTful API 设计、高并发任务调度与跨端协同，在多模态推理与教学平台场景中落地稳定、可维护的业务系统。深入理解 Redis、Asynq、MySQL、MinIO 与 Linux/TCP/IP 网络编程，能够围绕吞吐、延迟、可靠性和资源利用率持续优化系统。',
        tags: '<span class="core-tag primary">Go / Gin</span><span class="core-tag primary">React 18</span><span class="core-tag">Python / FastAPI</span><span class="core-tag">高并发调度</span><span class="core-tag">Redis / MySQL</span><span class="core-tag">微服务架构</span>',
        skills: {
            lang: { label: "语言与框架", value: "Go、Gin、Python、FastAPI、TypeScript、React 18、GORM、Tauri" },
            arch: { label: "服务端架构", value: "微服务架构、RESTful API、服务分层设计、异步任务调度、限流与熔断、缓存设计" },
            dist: { label: "中间件与存储", value: "Redis、Asynq、MySQL、MinIO、对象存储、数据建模" },
            deploy: { label: "部署与交付", value: "Docker、Docker Compose、Linux、环境隔离、配置化部署、CI/CD" },
            perf: { label: "系统与性能", value: "TCP/IP、HTTP、Goroutine 并发模型、任务生命周期管理、内存优化、高并发稳定性治理" },
        }
    },
    en: {
        summary: '<span class="highlight">Full-stack Engineer</span> with <span class="highlight">end-to-end product delivery capability</span>. Proficient in modern web stack (React/Go/Python) and distributed system design. Capable of handling complex engineering challenges.',
        tags: '<span class="core-tag primary">Go / Gin</span><span class="core-tag primary">React / TypeScript</span><span class="core-tag">Python / FastAPI</span><span class="core-tag">Docker / K8s</span><span class="core-tag">Microservices</span><span class="core-tag">Database Design</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "Go/Gin, C++ (STL/Modern C++), Python/FastAPI, TypeScript/React/Tauri" },
            os: { label: "System / OS", value: "Linux, Windows/macOS cross-platform, TCP/IP Network Programming, Docker" },
            backend: { label: "Backend / Middleware", value: "Go/Gin RESTful API · Redis + Asynq Task Queue · MySQL Tuning · MinIO · Goroutine" },
            tools: { label: "Architecture / Tools", value: "MVVM/Clean Architecture, Profiling, Git Workflow, CI/CD" },
        }
    }
};
