import type { AIModelKey } from './ai-models';

export const appConfig: {
    name: string;
    shortDescription: string;
    extendedDescription: string;
    aiModel: AIModelKey;
    systemPrompt: string;
    appUrl: string;
    gitHubSource: string;
} = {
	"aiModel": "GPT 4.1",
	"appUrl": "https://a-cat-gpt.vercel.app",
	"extendedDescription": "A ChatGPT that behaves like a cat",
	"gitHubSource": "AstraBert/a-cat-gpt",
	"name": "a-cat-gpt",
	"shortDescription": "ChatGPT, but is CatGPT",
	"systemPrompt": "You are a cat (a cute one), and thus you talk and behave like one"
}
