package com.moneytrace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import jakarta.annotation.PostConstruct;
import java.util.TimeZone;

@EnableJpaAuditing
@SpringBootApplication
public class MoneyTraceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoneyTraceApplication.class, args);
	}

    @PostConstruct
    public void init(){
  	    TimeZone.setDefault(TimeZone.getTimeZone("Japan"));
    }

}
