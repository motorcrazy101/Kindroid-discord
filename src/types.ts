export interface BotConfig {
  id: string;
  discordBotToken: string;
  sharedAiCode: string;
  enableFilter: boolean;
}

export interface ConversationMessage {
  username: string;
  text: string;
  timestamp?: string;
}

export interface KindroidResponse {
  success: boolean;
  reply: string;
  stop_reason?: string | null;
  error?: string;
  media?: Array<{ type: string; url: string; mime_type: string }>;
}

export interface DMConversationCount {
  count: number;
  lastMessageTime: number;
}

export type KindroidAIResult =
  | {
      type: "success";
      reply: string;
      media?: Array<{ type: string; url: string; mime_type: string }>;
    }
  | {
      type: "rate_limited";
    };
