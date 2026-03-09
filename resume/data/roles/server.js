export default {
    id: "server",
    label: { zh: "服务端", en: "Server" },
    zh: {
        summary: "服务端工程师，聚焦 Go/Python 服务与高并发任务系统，擅长把多阶段推理或业务流程拆成可观测、可恢复、可扩容的服务链路。关注吞吐、尾延迟、内存占用与故障补偿，能够围绕队列、缓存和状态机完成稳定性治理。",
        tags: '<span class="core-tag primary">Go / Gin</span><span class="core-tag primary">Redis / Asynq</span><span class="core-tag">MySQL / MinIO</span><span class="core-tag">RESTful API</span><span class="core-tag">高并发调度</span><span class="core-tag">Docker</span>',
        skills: {
            lang: { label: "语言与框架", value: "Go、Gin、Python、FastAPI、GORM、SQL" },
            arch: { label: "服务架构", value: "微服务拆分、RESTful API、任务状态机、幂等重试、限流与降级、故障补偿" },
            middleware: { label: "中间件与存储", value: "Redis、Asynq、MySQL、MinIO、缓存设计、对象存储" },
            deploy: { label: "部署与运维", value: "Docker、Docker Compose、Linux、配置管理、日志采集、CI/CD" },
            perf: { label: "稳定性治理", value: "Goroutine 并发、尾延迟治理、内存优化、长任务恢复、链路观测、压力定位" },
        },
    },
    en: {
        summary: "Backend engineer focused on Go/Python services and high-concurrency task systems, with repeated work turning multi-stage inference or business workflows into observable, recoverable, and horizontally scalable service pipelines. Optimizes throughput, tail latency, memory pressure, and failure compensation through queues, caches, and explicit task lifecycles.",
        tags: '<span class="core-tag primary">Go / Gin</span><span class="core-tag primary">Redis / Asynq</span><span class="core-tag">MySQL / MinIO</span><span class="core-tag">RESTful APIs</span><span class="core-tag">High-concurrency Scheduling</span><span class="core-tag">Docker</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "Go, Gin, Python, FastAPI, GORM, SQL" },
            arch: { label: "Service Architecture", value: "Microservice decomposition, RESTful APIs, task state machines, idempotent retries, rate limiting, graceful degradation" },
            middleware: { label: "Middleware/Storage", value: "Redis, Asynq, MySQL, MinIO, cache design, object storage" },
            deploy: { label: "Deployment/Operations", value: "Docker, Docker Compose, Linux, configuration management, logging, CI/CD" },
            perf: { label: "Reliability/Performance", value: "Goroutine concurrency, tail-latency control, memory optimization, long-task recovery, observability, load diagnosis" },
        },
    },
};
