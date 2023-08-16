package toy.project.demo.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import toy.project.demo.config.auth.JWTAuthenticationFilter;
import toy.project.demo.config.auth.JWTAuthorizationFilter;
import toy.project.demo.persistance.MemberRepository;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private AuthenticationConfiguration authConfig;
	
	@Autowired
	private MemberRepository memberRepository;



	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable()); // CSRF 보호 비활성화 (JS에서 호출 가능)
		http.cors(cors -> cors.disable()); // CORS 보호 비활성화 (React에서 호출 가능):RestAPI로 호출할 때

		http.authorizeHttpRequests(security -> {
			security.requestMatchers("/updateReview/**").authenticated()
			        .requestMatchers("/deleteReview/**").authenticated()
			        .requestMatchers("/createReview/**").authenticated()
			        .requestMatchers("/login/**").authenticated()
					.anyRequest()
					.permitAll();
		});

		http.formLogin(frmLogin->frmLogin.disable()); // Form을 이용한 로그인을 사용하지 않겠다는 설정
		// 시큐리티 세션을 만들지 않겠다고 설정
		http.sessionManagement(ssmg->ssmg.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
		http.addFilter(new JWTAuthenticationFilter(authConfig.getAuthenticationManager()));
		http.addFilter(new JWTAuthorizationFilter(authConfig.getAuthenticationManager(),memberRepository));

		return http.build();
	}


}