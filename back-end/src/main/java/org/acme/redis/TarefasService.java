package org.acme.redis;

import io.quarkus.redis.client.RedisClient;
import io.quarkus.redis.client.reactive.ReactiveRedisClient;
import io.smallrye.mutiny.Uni;

import io.vertx.mutiny.redis.client.Response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
class TarefasService {

    @Inject
    RedisClient redisClient;

    @Inject
    ReactiveRedisClient reactiveRedisClient;

    String get(String key) {
        return redisClient.get(key).toString();
    }

    void set(String key, String value) {
        redisClient.set(Arrays.asList(key, value));
    }

    void tarefas(String key, String incrementBy) {
        redisClient.incrby(key, incrementBy.toString());
    }

    Uni<List<String>> keys() {
        return reactiveRedisClient
                .keys("*")
                .map(response -> {
                    List<String> result = new ArrayList<>();
                    for (Response r : response) {
                        result.add(r.toString());
                    }
                    return result;
                });
    }
}

