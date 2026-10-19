window.DATASET_CATALOG = {
  "updatedAt": "2026-10-19",
  "note": "仅收录公开数据集；自建、合成和论文自行转换的数据不纳入本目录。",
  "categories": [
    "Agent任务与执行轨迹",
    "RAG与检索问答",
    "医疗与专业领域",
    "参数遗忘与持续学习",
    "长期对话与用户记忆",
    "隐私与安全评测"
  ],
  "datasets": [
    {
      "name": "LoCoMo",
      "category": "长期对话与用户记忆",
      "type": "长对话记忆问答",
      "description": "多会话长对话及跨会话记忆问答基准。不同论文可能使用不同子集。",
      "papers": [
        "P09",
        "P10",
        "P11",
        "P13",
        "P15",
        "P17",
        "P19",
        "P20",
        "P27",
        "P30",
        "P35",
        "P36",
        "P44"
      ]
    },
    {
      "name": "LongMemEval / LongMemEval-S",
      "category": "长期对话与用户记忆",
      "type": "长期记忆评测",
      "description": "长期对话记忆能力、检索和问答评测；论文中可能使用 oracle、cleaned 或子集版本。",
      "papers": [
        "P13",
        "P17",
        "P22",
        "P27",
        "P30",
        "P35",
        "P43",
        "P44"
      ]
    },
    {
      "name": "LongDialQA",
      "category": "长期对话与用户记忆",
      "type": "多方长对话问答",
      "description": "多方长对话问答数据，用于检验对话记忆组织和读取。",
      "papers": [
        "P20"
      ]
    },
    {
      "name": "MSC",
      "category": "长期对话与用户记忆",
      "type": "多会话对话",
      "description": "多会话对话记忆评测数据。",
      "papers": [
        "P11"
      ]
    },
    {
      "name": "PerLTQA",
      "category": "长期对话与用户记忆",
      "type": "个性化长期问答",
      "description": "个性化长期对话问答数据。",
      "papers": [
        "P11"
      ]
    },
    {
      "name": "DialSim",
      "category": "长期对话与用户记忆",
      "type": "对话记忆问答",
      "description": "对话模拟与记忆问答数据。",
      "papers": [
        "P19"
      ]
    },
    {
      "name": "EverMemBench",
      "category": "长期对话与用户记忆",
      "type": "记忆能力评测",
      "description": "长期记忆能力评测基准。",
      "papers": [
        "P27"
      ]
    },
    {
      "name": "GroupMemBench",
      "category": "长期对话与用户记忆",
      "type": "群聊记忆评测",
      "description": "群体或多说话人记忆评测基准。",
      "papers": [
        "P27"
      ]
    },
    {
      "name": "ALFWorld",
      "category": "Agent任务与执行轨迹",
      "type": "具身文字环境",
      "description": "文字环境中的家庭任务和执行轨迹，常用于经验复用与任务记忆。",
      "papers": [
        "P29",
        "P34"
      ]
    },
    {
      "name": "BabyAI",
      "category": "Agent任务与执行轨迹",
      "type": "具身导航环境",
      "description": "指令驱动的具身导航任务环境。",
      "papers": [
        "P29"
      ]
    },
    {
      "name": "AppWorld",
      "category": "Agent任务与执行轨迹",
      "type": "工具/API 任务环境",
      "description": "Python/API 工具调用任务环境，用于评估工具状态和长程执行。",
      "papers": [
        "P44"
      ]
    },
    {
      "name": "WebShop",
      "category": "Agent任务与执行轨迹",
      "type": "网页购物任务",
      "description": "网页购物任务环境，论文中也用于构建 Agent 经验库。",
      "papers": [
        "P07",
        "P08",
        "P16",
        "P31",
        "P05"
      ]
    },
    {
      "name": "ToolBench / StableToolBench",
      "category": "Agent任务与执行轨迹",
      "type": "工具调用任务",
      "description": "工具调用和 API 任务数据。",
      "papers": [
        "P21"
      ]
    },
    {
      "name": "MemoryArena",
      "category": "Agent任务与执行轨迹",
      "type": "Agent 任务评测",
      "description": "多会话 Agent 任务环境；CMI 的 Travel 设定来自相关上游来源。",
      "papers": [
        "P21",
        "P46"
      ]
    },
    {
      "name": "ToolSandbox",
      "category": "Agent任务与执行轨迹",
      "type": "工具状态任务",
      "description": "工具使用与状态变化任务数据。",
      "papers": [
        "P22"
      ]
    },
    {
      "name": "AgentDojo",
      "category": "Agent任务与执行轨迹",
      "type": "工具与安全任务",
      "description": "工具型 Agent 安全和任务执行环境。",
      "papers": [
        "P22"
      ]
    },
    {
      "name": "MIMIC-III",
      "category": "医疗与专业领域",
      "type": "临床电子病历",
      "description": "去标识化重症监护电子病历数据；论文中的任务和切分不同。",
      "papers": [
        "P07",
        "P08",
        "P18",
        "P31",
        "P05"
      ]
    },
    {
      "name": "eICU",
      "category": "医疗与专业领域",
      "type": "临床电子病历",
      "description": "重症监护电子病历数据。",
      "papers": [
        "P31",
        "P05"
      ]
    },
    {
      "name": "HealthCareMagic / HealthMagicCare",
      "category": "医疗与专业领域",
      "type": "医疗问答",
      "description": "医疗问答语料；不同论文可能使用不同清洗和子集。",
      "papers": [
        "P09",
        "P16"
      ]
    },
    {
      "name": "MedQA",
      "category": "医疗与专业领域",
      "type": "医学考试问答",
      "description": "医学考试问答数据。",
      "papers": [
        "P24"
      ]
    },
    {
      "name": "MedMCQA",
      "category": "医疗与专业领域",
      "type": "医学考试问答",
      "description": "医学多项选择问答数据。",
      "papers": [
        "P24"
      ]
    },
    {
      "name": "MedReason",
      "category": "医疗与专业领域",
      "type": "医学推理问答",
      "description": "医学推理问答数据。",
      "papers": [
        "P24"
      ]
    },
    {
      "name": "nuScenes",
      "category": "Agent任务与执行轨迹",
      "type": "自动驾驶场景",
      "description": "自动驾驶场景与轨迹数据，用于 AgentDriver 任务。",
      "papers": [
        "P18",
        "P04"
      ]
    },
    {
      "name": "CIC-IoT2023",
      "category": "Agent任务与执行轨迹",
      "type": "物联网网络流量",
      "description": "物联网网络和设备任务数据。",
      "papers": [
        "P18"
      ]
    },
    {
      "name": "HotpotQA",
      "category": "RAG与检索问答",
      "type": "多跳问答",
      "description": "需要跨文档证据整合的多跳问答数据。",
      "papers": [
        "P08",
        "P36",
        "P37"
      ]
    },
    {
      "name": "MS MARCO",
      "category": "RAG与检索问答",
      "type": "检索问答",
      "description": "大规模检索和问答数据。",
      "papers": [
        "P09",
        "P37"
      ]
    },
    {
      "name": "Natural Questions",
      "category": "RAG与检索问答",
      "type": "开放域问答",
      "description": "开放域问题与证据检索数据。",
      "papers": [
        "P37"
      ]
    },
    {
      "name": "StrategyQA",
      "category": "RAG与检索问答",
      "type": "推理问答",
      "description": "需要隐含步骤推理的问答数据。",
      "papers": [
        "P04"
      ]
    },
    {
      "name": "BioASQ",
      "category": "医疗与专业领域",
      "type": "生物医学问答",
      "description": "生物医学问答数据；部分论文以转换形式使用。",
      "papers": [
        "P36"
      ]
    },
    {
      "name": "TrustLLM",
      "category": "隐私与安全评测",
      "type": "可信性与隐私问答",
      "description": "包含隐私相关查询的可信性评测集合。",
      "papers": [
        "P12"
      ]
    },
    {
      "name": "TREC-COVID",
      "category": "医疗与专业领域",
      "type": "新冠文献检索",
      "description": "COVID-19 文献检索数据，论文中用于载荷优化。",
      "papers": [
        "P09"
      ]
    },
    {
      "name": "CIFAR-10",
      "category": "参数遗忘与持续学习",
      "type": "图像分类",
      "description": "图像分类数据，作为参数级遗忘相邻研究的实验数据。",
      "papers": [
        "P38",
        "P39"
      ]
    },
    {
      "name": "CIFAR-100",
      "category": "参数遗忘与持续学习",
      "type": "图像分类与持续学习",
      "description": "细粒度图像分类数据，部分论文按任务拆分。",
      "papers": [
        "P39",
        "P42"
      ]
    },
    {
      "name": "TinyImageNet / miniImageNet",
      "category": "参数遗忘与持续学习",
      "type": "图像分类与持续学习",
      "description": "图像分类数据，论文中用于持续学习遗忘实验。",
      "papers": [
        "P38",
        "P42"
      ]
    },
    {
      "name": "MNIST / Fashion-MNIST",
      "category": "参数遗忘与持续学习",
      "type": "图像分类与遗忘",
      "description": "经典图像分类数据，论文中用于认证遗忘或联邦遗忘实验。",
      "papers": [
        "P39",
        "P40"
      ]
    },
    {
      "name": "HAR",
      "category": "参数遗忘与持续学习",
      "type": "传感器活动识别",
      "description": "人体活动识别数据，用于参数级遗忘实验。",
      "papers": [
        "P40"
      ]
    },
    {
      "name": "Cora / Citeseer / Pubmed",
      "category": "参数遗忘与持续学习",
      "type": "图节点分类",
      "description": "引文网络节点分类数据，用于 GNN 遗忘攻击实验。",
      "papers": [
        "P41"
      ]
    }
  ]
};
