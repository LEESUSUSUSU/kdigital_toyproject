package toy.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import toy.project.demo.domain.Review;
import toy.project.demo.persistance.ReviewRepository;

@Service
@RequiredArgsConstructor
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review insertReview(String username, String notename, byte[] image, String notePass, String note) {
        Review review = new Review();
        review.setUsername(username);
        review.setNotename(notename);
       
        

        // Check if the image data is null or empty before setting it
        if (image != null && image.length > 0) {
            review.setImage(image);
        }

        review.setNotePass(notePass);
        review.setNote(note);

        return reviewRepository.save(review);
    }

    public Review updateReview(Integer seq, String username, String notename, byte[] image, String notepass, String note) {
        Review review = reviewRepository.findById(seq).orElse(null);
        if (review != null && review.getNotePass().equals(notepass)) {
            review.setUsername(username);
            review.setNotename(notename);
            // Check if the image data is null or empty before setting it
            if (image != null && image.length > 0) {
                review.setImage(image);
            }
            review.setNotePass(notepass);
            review.setNote(note);
            return reviewRepository.save(review);
        }
        return null; // Handle error here if the review is not found or the notepass doesn't match
    }

    public void deleteReview(Integer seq, String notepass) {
        Review review = reviewRepository.findById(seq).orElse(null);
        if (review != null && notepass == review.getNotePass()) {
            reviewRepository.delete(review);
            System.out.println("삭제되었습니다");
        }else {
        	System.out.println("없는 게시판 입니다.");
        }
    }

    public Review getReviewById(Integer seq) {
        return reviewRepository.findById(seq).orElse(null);
    }
}
