package toy.project.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.Util.JwtTokenUtil;
import toy.project.demo.domain.member;
import toy.project.demo.persistance.MemberRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class MemberController {

    @Autowired
    private MemberRepository memberIdRepository;
    
    @Autowired
    private BCryptPasswordEncoder encoder;
    
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody member newMember) {
        try {
            // Check if the username already exists in the database
            if (memberIdRepository.existsByUsername(newMember.getUsername())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists.");
            }
            newMember.setPassword(encoder.encode(newMember.getPassword()));

            memberIdRepository.save(newMember);
            return ResponseEntity.ok("Signup successful!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Signup failed.");
        }
    }
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody member loginRequest) {
//        try {
//        
//        
//            member member = memberIdRepository.findByUsername(loginRequest.getUsername());
//            if (member != null) {
//            	if (encoder.matches(loginRequest.getPassword(), member.getPassword()))
//            		return ResponseEntity.ok("Login successful!");
//            	else 
//            		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("not matches password");
//            } else {
//                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed.");
//        }
//    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody member loginRequest) {
        try {
            member member = memberIdRepository.findByUsername(loginRequest.getUsername());
            if (member != null) {
                if (encoder.matches(loginRequest.getPassword(), member.getPassword())) {
                    String token = jwtTokenUtil.generateToken(member.getUsername());
                    return ResponseEntity.ok(token);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed.");
        }
    }
}
