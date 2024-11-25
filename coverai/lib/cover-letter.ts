import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

export async function generateCoverLetter(
  jobDescription: string,
  resume: string
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  
  if (!apiKey) {
    throw new Error("Missing Gemini API key");
  }

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    apiKey,
    temperature: 0.7,
    maxOutputTokens: 2048,
  });

  const systemPrompt = `You are a professional cover letter writer. Generate a compelling cover letter for the provided job description and resume. The letter should:
- Be 300-400 words
- Follow standard business letter format
- Focus on relevant experience and achievements
- Show enthusiasm for the role
- End with a clear call to action
- Be modern and professional in tone
- Highlight specific matching skills from the resume

Output ONLY the cover letter text in proper business letter format.`;

  const generateChain = RunnableSequence.from([
    {
      jobDescription: (input: any) => input.jobDescription,
      resume: (input: any) => input.resume,
      systemPrompt: (input: any) => input.systemPrompt,
    },
    async (input) => {
      const response = await model.invoke([
        new SystemMessage(input.systemPrompt),
        new HumanMessage(
          `Job Description:\n${input.jobDescription}\n\nResume:\n${input.resume}\n\nGenerate a focused, professional cover letter.`
        ),
      ]);
      return response.content;
    },
    new StringOutputParser(),
  ]);

  try {
    const coverLetter = await generateChain.invoke({
      jobDescription,
      resume,
      systemPrompt,
    });

    return coverLetter;
  } catch (error) {
    console.error("Error in cover letter generation:", error);
    throw error;
  }
}