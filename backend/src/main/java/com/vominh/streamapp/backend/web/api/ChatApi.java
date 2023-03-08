package com.vominh.streamapp.backend.web.api;

import com.vominh.streamapp.backend.config.WebSocketConfig;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatApi {

    @GetMapping("/connect/{user}")
    public ResponseEntity<Boolean> checkConnect(@PathVariable("user") String user) {
        List<String> users = new ArrayList<>();

        WebSocketConfig.getSessions().forEach(s -> {
            users.add((String) s.getAttributes().get("username"));
        });

        return ResponseEntity.status(HttpStatus.OK).body(users.contains(user));
    }

    @GetMapping("/users")
    public ResponseEntity<List<String>> getUsers() {
        List<String> peoples = new ArrayList<>();

        WebSocketConfig.getSessions().forEach(s -> {
            peoples.add((String) s.getAttributes().get("username"));
        });

        return ResponseEntity.status(HttpStatus.OK).body(peoples);
    }

    @GetMapping("/session/clear")
    public ResponseEntity<String> clearSession() throws IOException {

        for (WebSocketSession webSocketSession : WebSocketConfig.getSessions()) {
            if(webSocketSession.isOpen()){
                webSocketSession.close();
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body("OK man");
    }
}
