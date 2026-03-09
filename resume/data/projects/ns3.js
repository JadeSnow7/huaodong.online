// 华为海思 | 网络仿真平台开发
export default {
    id: "ns3",
    link: "",
    featured: false,
    tagStyle: "system",
    tag: { zh: "系统", en: "System" },
    title: {
        zh: "华为海思网络仿真平台重构与效能提升",
        en: "HiSilicon Network Simulation Platform Re-architecture",
    },
    // Which roles show this project
    showIn: ["all", "system", "server"],
    descriptions: {
        default: {
            zh: {
                meta: "启明学院 Dian 团队 · 华为海思组核心研发 · 2023.03 - 2024.04",
                points: `<li><strong>项目定位</strong>：主导华为海思内部底层网络仿真核心算法从自研平台向标准开源 NS-3 仿真环境的跨平台重构与迁移，保障了芯片研发与验证流程的不中断跨端迁移，将内部验证吞吐效率提升并深度融入了业界标准组件流</li><li><strong>架构与特性适配</strong>：完成平台底层自底向上的跨版本重构（从 ns-3.31 强制演进至 ns-3.38），深入解析 Event Scheduler (事件调度器) 与 Time Model (时间步进模型) 内核代码。攻克了 C++ ABI 兼容性与内核对象生命周期管理痛点，大规模引入现代 C++ 智能指针体系接管手写内存释放，彻底消除了历史遗留的内存泄漏风险</li><li><strong>工程化指标建设</strong>：针对复杂网络拥塞与拓扑场景，独立设计并开发了高精度的网络性能统计观测节点（Metrics Sink Modules），实现了对端到端时延、实时吞吐率、丢包率及多级队列占用率的毫秒级无切入式探针采集；在十万级并发包规模下，其统计开销占比低于总仿真时长的 5%，极大加速了拥塞控制算法与 PHY/MAC 层协议的调优迭代周期</li><li><strong>技术栈</strong>：C++ (Modern C++ / STL) · ns-3 Discrete-Event Simulator内核机制 · Python 脚本自动化编排 · Linux (GDB/Valgrind 性能剖析) · TCP/IP 协议栈及多层拥塞模型</li>`,
            },
            en: {
                meta: "Dian Team (Huawei HiSilicon Group) · Core R&D · 2023.03 - 2024.04",
                points: `<li><strong>Overview</strong>: Spearheaded the cross-platform migration of Huawei HiSilicon's proprietary network simulation algorithms into the standardized open-source NS-3 simulator, maintaining uninterrupted chip R&D and verification pipelines while aligning proprietary logic with industry-standard discrete-event modules.</li><li><strong>Architecture & ABI Modernization</strong>: Managed a complex, ground-up version migration of the underlying simulation framework (ns-3.31 to ns-3.38). Deeply reverse-engineered the ns-3 Event Scheduler and Time Model kernels to resolve intricate C++ ABI incompatibilities. Systematically replaced legacy manual memory management with Modern C++ smart pointer idioms, structurally preventing historic memory leak crashes across millions of concurrent packet events.</li><li><strong>Telemetry & Metrics Engineering</strong>: Engineered deterministic, low-overhead observation sinks to monitor highly congested topologies. Implemented millisecond-precise, non-intrusive probes calculating end-to-end latency, real-time throughput, packet loss, and multi-tier queue occupancies. Sustained telemetry overhead under 5% of total execution time even during hundred-thousand packet bursts, substantially accelerating the tuning cycles for congestion control and PHY/MAC layer protocols.</li><li><strong>Stack</strong>: C++ (Modern C++ / STL) · ns-3 Discrete-Event Simulator Architecture · Python Build Automation · Linux (GDB/Valgrind Memory Profiling) · TCP/IP Stack & Congestion Avoidance Algorithms</li>`,
            },
        },
    },
};
