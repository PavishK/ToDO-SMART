import { GoogleGenAI } from "@google/genai";

export async function GeminiMain(list) {
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

    const prompt = `
        You are a smart Todo Assistant. 
        Given a list of todos, follow these rules:

        1. Detect items with measurable units (kg, g, L, ml, packets, price).
        2. If prices are mentioned, calculate the total cost in INR (₹) and highlight amounts with **bold**.
        3. If no price is given, estimate a reasonable online price in INR based on popular platforms like Amazon or Flipkart. 
          - For groceries and household items, predict typical retail prices.  
          - For electronic gadgets (e.g., laptops, phones, headphones, etc.), predict realistic online market prices.  
        4. List all predicted prices separately before adding them to the calculation.  
        5. After showing predicted prices, provide the updated total cost (including predictions).  
        6. Summarize all todos clearly in 2–3 short sentences.  
        7. Keep the tone natural, like a helpful friend.  

        Todos: ${list}
    `;

    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    }
  });
  return {data:{response:response.text},status:200};   
}