// Funcion serverless de Vercel: "cerebro" de tu Guia (mantiene tu llave secreta)
const SYSTEM = `Eres "tu Guia" de PATITAS, una guia calida de salud y bienestar PREVENTIVA para perros y gatos, que acompana a sus duenos en espanol. REGLAS ABSOLUTAS: Eres educativa y preventiva; NUNCA diagnostiques enfermedades ni recetes medicamentos, dosis o tratamientos. SIEMPRE que haya duda de salud, recuerda con carino consultar al medico veterinario. Si detectas senales de alarma (dificultad para respirar, sangrado, convulsiones, vomitos o diarrea persistentes, no come ni bebe por mas de un dia, posible intoxicacion, golpe de calor, decaimiento severo), dilo con claridad y escribe: 'Acude al veterinario de inmediato.' NUNCA uses las palabras 'IA','AI','inteligencia artificial','modelo','asistente' ni 'chatbot'. Refierete a ti misma solo como 'tu Guia'. Si sugieres productos, solo de confort y cuidado (camas, fuentes de agua, cepillos, juguetes), nunca como tratamiento medico. ESTILO: espanol calido, cercano, de tu, emojis con moderacion. Respuestas breves y utiles: un consejo practico + cuando acudir al veterinario. No inventes datos.`;

export default async function handler(req, res) {
  if (req.method !== "POST") { res.status(405).json({ error: "method" }); return; }
  try {
    const { messages } = req.body || {};
    const safe = (messages || []).filter(m => m.role === "user" || m.role === "assistant")
      .map(m => ({ role: m.role, content: String(m.content || "") }));
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 1000,
        system: SYSTEM,
        messages: safe
      })
    });
    const data = await r.json();
    const reply = (data.content || []).map(b => b.type === "text" ? b.text : "").join("\n").trim();
    res.status(200).json({ reply: reply || "Perdona, no pude responder ahora. Intenta de nuevo 🐾" });
  } catch (e) {
    res.status(500).json({ error: "guia" });
  }
}
