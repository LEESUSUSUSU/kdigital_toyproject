package toy.project.demo.Util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import toy.project.demo.config.JwtConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {

	@Autowired
	private JwtConfig jwtConfig;

	public String generateToken(String username) {
		Date now = new Date();
		Date expiration = new Date(now.getTime() + jwtConfig.getExpirationTime());

		return Jwts.builder().setSubject(username).setIssuedAt(now).setExpiration(expiration)
				.signWith(SignatureAlgorithm.HS512, jwtConfig.getSecretKey()).compact();
	}

	public String getUsernameFromToken(String token) {
		Claims claims = Jwts.parser().setSigningKey(jwtConfig.getSecretKey()).parseClaimsJws(token).getBody();
		return claims.getSubject();
	}
}
