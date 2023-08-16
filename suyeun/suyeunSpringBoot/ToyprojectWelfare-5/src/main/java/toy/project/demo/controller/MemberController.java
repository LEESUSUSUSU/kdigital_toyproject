package toy.project.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import toy.project.demo.domain.Member;
import toy.project.demo.service.SecurityUserDetailsService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class MemberController {

    private final SecurityUserDetailsService securityUserDetailsService;

    @Autowired
    public MemberController(SecurityUserDetailsService securityUserDetailsService) {
        this.securityUserDetailsService = securityUserDetailsService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Member newMember) {
        boolean signUpResult = securityUserDetailsService.signUp(newMember);
        if (signUpResult) {
            return ResponseEntity.ok("Signup successful!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Member loginRequest) {
        if (securityUserDetailsService.login(loginRequest)) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
        }
    }
}
