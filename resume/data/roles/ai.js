export default {
    id: "ai",
    label: { zh: "AI 应用", en: "AI App" },
    zh: {
        summary: 'AI 研发工程师，专注于 Retrieval-Augmented Generation (RAG) 架构、Large Language Model (LLM) agent 设计与多模态应用落地，具备从知识库构建、模型调优到推理服务部署的完整链路经验。擅长围绕真实业务场景设计 GraphRAG、Tool Calling、推理调度、缓存复用与离线/在线协同策略，提升问答准确性、系统稳定性与资源利用率。具备端云协同落地经验，可将 Qwen 系列模型、Stable Diffusion、Stable Video Diffusion 与 Text-to-Speech 能力封装为可扩展服务，并结合 NPU 加速实现边缘推理。',
        tags: '<span class="core-tag primary">Python</span><span class="core-tag primary">LLM Agent</span><span class="core-tag">RAG / GraphRAG</span><span class="core-tag">SFT 微调</span><span class="core-tag">多模态编排</span><span class="core-tag">端云协同</span>',
        skills: {
            lang: { label: "模型与框架", value: "Python、PyTorch、FastAPI、Qwen、Stable Diffusion、Stable Video Diffusion、Text-to-Speech" },
            ai: { label: "RAG 与 Agent", value: "Retrieval-Augmented Generation (RAG)、GraphRAG、Large Language Model (LLM) agents、Tool Calling、Prompt Engineering、知识库构建" },
            perf: { label: "调优与推理", value: "Supervised Fine-Tuning (SFT)、模型服务化、异步推理链路、缓存复用、限流调度、断点恢复" },
            platform: { label: "端云协同与部署", value: "Docker、Linux、NPU acceleration、边缘推理、端云协同、服务部署落地" },
            sys: { label: "数据与系统", value: "Redis、Asynq、MySQL、MinIO、多模态任务编排、推理服务接口设计" },
        }
    },
    en: {
        summary: '<span class="highlight">AI Application Engineer</span>, specialized in <span class="highlight">LLM deployment</span> and <span class="highlight">Agent system design</span>. Expert in RAG, prompt engineering and fine-tuning. Proficient in building scalable intelligent applications with Python/LangChain.',
        tags: '<span class="core-tag primary">Python</span><span class="core-tag primary">LLM Agent</span><span class="core-tag">RAG / GraphRAG</span><span class="core-tag">Model Fine-tuning</span><span class="core-tag">Qwen / Llama</span><span class="core-tag">LangChain</span>',
        skills: {
            lang: { label: "Languages/Frameworks", value: "Python, PyTorch, FastAPI, C++ (STL/Qt), TypeScript (React/Tauri)" },
            ai: { label: "AI / Multimodal", value: "LLM agents (fine-tuning, tool calling), SD/SVD generation, TTS, GraphRAG, pHash/LSH similarity" },
            platform: { label: "Systems/Platforms", value: "Linux, Docker containerization, Network programming (HTTP/WebSocket)" },
            devflow: { label: "AI-Driven Engineering", value: "Architecture-first design, Code spec standards, Prompt engineering &amp; multi-agent orchestration, AI-assisted coding" },
        }
    }
};
