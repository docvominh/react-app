package com.vominh.personal.weather.config;

import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CharacterEncodingFilter;

import java.util.Arrays;
import java.util.List;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final Environment environment;

    public SecurityConfig(Environment environment) {
        this.environment = environment;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Tomcat encode issue
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        http.addFilterBefore(filter, CsrfFilter.class);

        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedHeaders(List.of("Connection", "Keep-Alive", "Content-Type"));
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT", "OPTIONS", "PATCH", "DELETE"));

        if (Arrays.stream(environment.getActiveProfiles()).anyMatch(p -> p.equals("dev"))) {
            corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000"));
        }else{
            corsConfiguration.setAllowedOrigins(List.of("https://pdminh.dev"));
        }

        http
                .authorizeRequests()
                .antMatchers("**").permitAll()
                .and()
                .cors().configurationSource(request -> corsConfiguration)
                .and().csrf().disable();
    }
}
