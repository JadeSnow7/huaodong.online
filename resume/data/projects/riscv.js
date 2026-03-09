// SoC/CPU 设计
export default {
    id: "riscv",
    link: "https://github.com/JadeSnow7/RISCV-Pipeline-CPU",
    featured: false,
    tagStyle: "system",
    tag: { zh: "硬件", en: "Hardware" },
    title: {
        zh: "基於 RISC-V 架构的五级流水线 CPU 设计",
        en: "RISC-V 5-Stage Pipelined CPU",
    },
    showIn: ["all", "system", "fullstack"],
    descriptions: {
        default: {
            zh: {
                meta: "第七届全国大学生集成电路创新创业大赛（杯赛） · 核心开发 · 2023.01 - 2023.06",
                points: `<li><strong>项目定位</strong>：从零开始使用 Verilog 基于 RISC-V (RV32I) 指令集架构，设计并实现了一颗完整的五级流水线 CPU，并成功在 FPGA 开发板上完成综合与功能验证，荣获全国总决赛二等奖</li><li><strong>架构与冒险解决</strong>：独立完成了取指(IF)、译码(ID)、执行(EX)、访存(MEM)、回写(WB)核心数据通路的设计；面对流水线架构固有的数据冒险与控制冒险，设计了 Forwarding Unit（数据旁路转发单元）与 Hazard Detection Unit（流水线停顿检测单元），将核心运算指令在无冒险情况下的 CPI (每指令周期数) 稳定在 1.0</li><li><strong>功能验证与完备性</strong>：构建了包含 50+ 汇编指令集的定制化测试激励（Testbench），涵盖了边界条件与复杂的分支跳转回归场景。通过 ModelSim 进行了指令级时序仿真验证，确认所有算术运算与跳跃指令行为符合 RISC-V 官方规范，保证了流片前 RTL 代码的高门级综合成功率</li><li><strong>技术栈</strong>：Verilog HDL · RISC-V (RV32I) ISA · ModelSim / Vivado (仿真与综合) · FPGA 硬件开发</li>`,
            },
            en: {
                meta: "7th National IC Innovation Competition · Core Designer · 2023.01 - 2023.06",
                points: `<li><strong>Overview</strong>: Designed and implemented a complete 5-stage pipelined CPU from scratch based on the RISC-V (RV32I) Instruction Set Architecture using Verilog. Successfully synthesized and verified on FPGA hardware, winning the Second Prize in the National Finals.</li><li><strong>Architecture & Hazard Resolution</strong>: Independently engineered the core datapath spanning Instruction Fetch (IF), Decode (ID), Execute (EX), Memory (MEM), and Write-back (WB) stages. To address inherent structural, data, and control hazards, implemented a granular Forwarding Unit (Bypassing) and Hazard Detection Unit (Stalling), successfully achieving a persistent CPI (Cycles Per Instruction) of exactly 1.0 during non-hazard execution cycles.</li><li><strong>Verification & Test Benches</strong>: Constructed comprehensive testbenches comprising 50+ tailored assembly instruction suites covering edge cases, pipeline flushes, and complex branch prediction regression scenarios. Conducted rigorous instruction-level timing simulations via ModelSim to guarantee absolute compliance with the official RISC-V specification, ensuring a high yield rate for pre-silicon RTL synthesis.</li><li><strong>Stack</strong>: Verilog HDL · RISC-V (RV32I) ISA · ModelSim / Vivado (Simulation & Synthesis) · FPGA Development</li>`,
            },
        },
    },
};