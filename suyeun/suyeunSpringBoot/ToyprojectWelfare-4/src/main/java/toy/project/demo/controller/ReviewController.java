package toy.project.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import toy.project.demo.domain.Review;
import toy.project.demo.service.ReviewService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/main")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/createReview")
    public Review insertReview(@RequestBody Review review)  {
        return reviewService.insertReview(review.getUsername(), review.getNotename(), review.getImage(), review.getNotePass(), review.getNote());
    }

    @PostMapping("/updateReview")
    public Review updateReview(@RequestParam Integer seq, @RequestParam String username, @RequestParam String notename,
            @RequestParam MultipartFile image, @RequestParam String notepass, @RequestParam String note) throws IOException {
        return reviewService.updateReview(seq, username, notename, image.getBytes(), notepass, note);
    }

    @DeleteMapping("/deleteReview") // Use DeleteMapping instead of PostMapping
    public void deleteReview(@RequestBody Review review) {
        reviewService.deleteReview(review.getId(),review.getNotePass());
    }

    @GetMapping("/review/{seq}")
    public Review getReview(@PathVariable Integer seq) {
        return reviewService.getReviewById(seq);
    }
}
