package toy.project.demo.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.member1;
import toy.project.demo.persistance.UserRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class DataController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/main")
    public List<member1> getAllMembers() {
        return userRepository.findAll();
    }
    
    
    
  
    
}
