package com.example.retirar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.example.retirar.client")
public class EstoqueRetiradaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EstoqueRetiradaApplication.class, args);
    }
}
