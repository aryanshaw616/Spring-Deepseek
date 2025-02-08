package com.aryan.spring_deepseek.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
public class ChatAIService {

    private final ChatClient chatClient;

    public ChatAIService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public String askToDeepSeekAI(String question){
        return chatClient.prompt(question)
                .call().content();
    }

    public Flux<String> askToDeepSeekAIWithStream(String question){
        return chatClient.prompt(question)
                .stream().content();
    }
}
