export default {
    id: "system",
    label: { zh: "系统", en: "System" },
    zh: {
        summary: "系统工程师，围绕 Linux/C++ 系统级编程、资源治理与底层机制实现展开工作，能够从 CPU 微架构、操作系统并发模型到网络仿真链路定位性能瓶颈。关注内存占用、线程阻塞、ABI 兼容和可恢复任务协议等高风险系统问题。",
        tags: '<span class="core-tag primary">C++17 / Linux</span><span class="core-tag primary">性能剖析</span><span class="core-tag">多线程并发</span><span class="core-tag">TCP/IP</span><span class="core-tag">RISC-V</span><span class="core-tag">ns-3</span>',
        skills: {
            lang: { label: "语言与运行时", value: "C / C++17、Qt 6、Python、POSIX API、SystemVerilog" },
            os: { label: "操作系统与并发", value: "Linux、进程/线程调度、内存管理、IPC、事件循环、多线程同步" },
            arch: { label: "体系结构", value: "RISC-V、流水线设计、Hazard Detection、Forwarding、离散事件调度" },
            network: { label: "网络与协议", value: "TCP/IP、Socket、ns-3、时延/吞吐统计、协议仿真与验证" },
            toolchain: { label: "剖析与工程", value: "GDB、Valgrind、CMake、Makefile、日志定位、自动化回归" },
        },
    },
    en: {
        summary: "Systems engineer working across Linux/C++ runtime behavior, resource governance, and low-level mechanisms, from CPU microarchitecture and OS concurrency models to network-simulation pipelines. Regularly tackles memory pressure, thread blocking, ABI compatibility, and recoverable task contracts in failure-prone systems.",
        tags: '<span class="core-tag primary">C++17 / Linux</span><span class="core-tag primary">Performance Profiling</span><span class="core-tag">Multi-thread Concurrency</span><span class="core-tag">TCP/IP</span><span class="core-tag">RISC-V</span><span class="core-tag">ns-3</span>',
        skills: {
            lang: { label: "Languages/Runtimes", value: "C / C++17, Qt 6, Python, POSIX APIs, SystemVerilog" },
            os: { label: "OS/Concurrency", value: "Linux, process and thread scheduling, memory management, IPC, event loops, synchronization" },
            arch: { label: "Architecture", value: "RISC-V, pipelined design, hazard detection, forwarding, discrete-event scheduling" },
            network: { label: "Networking/Protocols", value: "TCP/IP, sockets, ns-3, delay and throughput telemetry, protocol simulation and validation" },
            toolchain: { label: "Profiling/Tooling", value: "GDB, Valgrind, CMake, Makefile, log-driven diagnosis, automated regression" },
        },
    },
};
