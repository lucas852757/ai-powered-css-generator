import OpenAI from "openai";

async function codeFetcher(userText) {
  // CRA only exposes env vars prefixed with REACT_APP_ in the browser build.
  // Make sure you export this in your shell before running `npm start`.
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const endpoint = "https://models.github.ai/inference";
  const modelName = "openai/gpt-4o";

  const client = new OpenAI({ baseURL: endpoint, apiKey: token, dangerouslyAllowBrowser: true  });

  const response = await client.chat.completions.create({
    messages: [
      { role: "system", content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate." },
      { role: "user", content: userText }
    ],
    temperature: 1.0,
    top_p: 1.0,
    max_tokens: 1000,
    model: modelName
  });
  
  return response.choices[0].message.content;

}

export default codeFetcher;
