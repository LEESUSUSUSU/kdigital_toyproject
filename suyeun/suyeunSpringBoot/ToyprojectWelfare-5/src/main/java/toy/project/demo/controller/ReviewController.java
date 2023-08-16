package toy.project.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.Review;
import toy.project.demo.persistance.ReviewRepository.InvalidPasswordException;
import toy.project.demo.persistance.ReviewRepository.ReviewNotFoundException;
import toy.project.demo.service.ReviewService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/main")
public class ReviewController {

   @Autowired
   ReviewService reviewService;
   
   
   @GetMapping("/ShowReview/{seq}")
   @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Review> showReview(@PathVariable Integer seq) {
        try {
            Review review = reviewService.showReview(seq);
            return ResponseEntity.ok(review);
        } catch (ReviewNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
   

   
   @PostMapping("/createReview")
   @PreAuthorize("hasRole('ROLE_USER')")
   public ResponseEntity<?> insertReview(@RequestBody Review review) throws IOException {
      System.out.println(review);
      reviewService.insertReview(review);
      //return ResponseEntity.ok(review);
      return ResponseEntity.ok("OK");
   }
   
   
   
   
   @PutMapping("/updateReview")
   @PreAuthorize("hasRole('ROLE_USER')")
   public Review updateReview(
           @RequestParam Integer id,
           @RequestParam String notename,
           @RequestParam String notePass,
           @RequestParam String note,
           @RequestParam String sw_name,
           @RequestParam String username
   ) throws IOException {
       return reviewService.updateReview(id, notename, notePass, note, sw_name, username);
   }
   
 
   @DeleteMapping("/deleteReview") // Use DeleteMapping instead of PostMapping
   public Review deleteReview(@RequestBody Review review) throws ReviewNotFoundException, InvalidPasswordException {
      return reviewService.deleteReview(review.getId(), review.getNotePass());
   }
   }
