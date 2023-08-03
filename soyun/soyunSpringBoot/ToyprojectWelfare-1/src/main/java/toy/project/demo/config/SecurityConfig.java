package toy.project.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

//import edu.pnu.service.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
		
		security.csrf(csrf->csrf.disable());
		
		security.formLogin(abcd ->abcd.disable());
		
		security.authorizeHttpRequests(auth->{
			auth.anyRequest().permitAll();
		});
	
		return security.build();
	}
	

}