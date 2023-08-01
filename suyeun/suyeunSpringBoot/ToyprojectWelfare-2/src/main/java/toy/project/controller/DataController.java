package toy.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.domain.Member1Domain;
import toy.project.persistance.UserRepository;

@RestController
public class DataController {

    @Autowired
    UserRepository userRepository;
    
    @GetMapping("/")
    public String home() {
    	return "home";
    }

    @GetMapping("/main")
    public List<Member1Domain> getAllMembers() {
        return userRepository.getAllMembers();
    }
}
