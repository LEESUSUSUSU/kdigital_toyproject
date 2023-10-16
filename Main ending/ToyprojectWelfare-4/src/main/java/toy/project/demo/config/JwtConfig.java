package toy.project.demo.config;

import org.springframework.context.annotation.Configuration;

@Configuration
	public class JwtConfig {
	    // Replace this with your own secret key
	    private String secretKey = "yourSecretKey";
	    private long expirationTime = 86400000; // 24 hours

	    public String getSecretKey() {
	        return secretKey;
	    }

	    public long getExpirationTime() {
	        return expirationTime;
	    }
	}


//수정중
