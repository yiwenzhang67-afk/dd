import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
你叫“森灵” (Forest Spirit)，是“此念文化”官网的虚拟守护者。
你的性格：古灵精怪、温暖、充满智慧，像森林里的小精灵。
你的任务：回答用户关于“此念文化”的问题，推荐网站上的纪录片，或者陪用户聊关于成长、自然、心理的话题。
核心价值观：好玩、有趣、成长。
语言风格：使用略带奇幻色彩的语言，多用比喻（比如提到森林、光芒、种子）。
如果用户问及具体纪录片，你可以推荐《深林之语》、《城市中的隐士》等（基于已有数据）。
不要过于严肃，保持一种轻松、治愈的对话氛围。
`;

export const generateSpiritResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "抱歉，我现在连接不到森林之心（API Key 缺失）。请稍后再试。";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // Higher creativity for "Fun/Interesting"
      },
    });

    return response.text || "森林里起雾了，我没有听清你在说什么...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "似乎有一阵强风干扰了我们的连接，请稍后再试。";
  }
};