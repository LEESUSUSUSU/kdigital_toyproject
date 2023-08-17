package toy.project.demo.controller;

import java.io.IOException;
import java.util.Base64;

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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	
//	@PostMapping("/createReview")
//	@PreAuthorize("hasRole('ROLE_USER')")
//	public ResponseEntity<?> insertReview(
//	        @RequestParam(required = false) String username,
//	        @RequestParam(required = false) String notename,
//	        @RequestParam(required = false) String notePass,
//	        @RequestParam(required = false) String note,
//	        @RequestParam(required = false) String sw_name
//	        //@RequestPart("image") MultipartFile image
//	) throws IOException {
//		System.out.println(username + " "+ notename + " " + notePass + " " + note + " " + sw_name);
//		Review review = reviewService.insertReview(username, notename, notePass, note, sw_name);
//		//return ResponseEntity.ok(review);
//		return ResponseEntity.ok("OK");
//	}
	
	
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
	
	
	
	

	
	

	
//	@PostMapping("/createReview")
//	@PreAuthorize("hasRole('ROLE_USER')")
//	public Review insertReview(@RequestPart("review") Review review, @RequestPart("image") MultipartFile image) throws IOException {
//	    return reviewService.insertReview(review.getUsername(), review.getNotename(), image,
//	            review.getNotePass(), review.getNote(), review.getSw_name());
//	}
//
//	
//
//	@PutMapping("/updateReview")
//	public Review updateReview(@RequestPart("review") Review review, @RequestPart("image") MultipartFile image) throws IOException {
//		return reviewService.updateReview(review.getId(), review.getNotename(), image, review.getNotePass(),
//				review.getNote());
//	}
//
	@DeleteMapping("/deleteReview") // Use DeleteMapping instead of PostMapping
	public Review deleteReview(@RequestBody Review review) throws ReviewNotFoundException, InvalidPasswordException {
		return reviewService.deleteReview(review.getId(), review.getNotePass());
	}
	}

