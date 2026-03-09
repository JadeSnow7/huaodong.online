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
        summary: "Full-stack engineer centered on Go service architecture and end-to-end product delivery, able to close the loop from React/TypeScript clients and Go/Python services to storage, middleware, and deployment. Focused on microservice decomposition, RESTful API design, high-concurrency task orchestration, and cross-end collaboration in multimodal inference and education platforms.",
        tags: '<span class="core-tag primary">Go / Gin</span><span class="core-tag primary">React 18</span><span class="core-tag">Python / FastAPI</span><span class="core-tag">High-concurrency Scheduling</span><span class="core-tag">Redis / MySQL</span><span class="core-tag">Microservices</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "Go, Gin, Python, FastAPI, TypeScript, React 18, GORM, Tauri" },
            arch: { label: "Service Architecture", value: "Microservices, RESTful APIs, service layering, asynchronous task orchestration, rate limiting, cache design" },
            dist: { label: "Middleware/Storage", value: "Redis, Asynq, MySQL, MinIO, object storage, data modeling" },
            deploy: { label: "Deployment/Delivery", value: "Docker, Docker Compose, Linux, environment isolation, configuration-driven deployment, CI/CD" },
            perf: { label: "Systems/Performance", value: "TCP/IP, HTTP, goroutine concurrency, task lifecycle management, memory optimization, high-concurrency reliability" },
        }
    },
};
