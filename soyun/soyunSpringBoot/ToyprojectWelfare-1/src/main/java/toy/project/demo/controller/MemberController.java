package toy.project.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.memberid;
import toy.project.demo.persistance.MemberIdRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class MemberController {

    @Autowired
    private MemberIdRepository memberIdRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody memberid newMember) {
        try {
            // Check if the username already exists in the database
            if (memberIdRepository.existsByUsername(newMember.getUsername())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists.");
            }

            memberIdRepository.save(newMember);
            return ResponseEntity.ok("Signup successful!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Signup failed.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody memberid loginRequest) {
        try {
            memberid member = memberIdRepository.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
            if (member != null) {
                return ResponseEntity.ok("Login successful!");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Login failed.");
        }
    }
    
    
}
