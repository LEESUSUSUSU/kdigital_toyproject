package toy.project.demo.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.annotation.MultipartConfig;
import lombok.RequiredArgsConstructor;
import toy.project.demo.domain.Review;
import toy.project.demo.persistance.ReviewRepository;
import toy.project.demo.persistance.ReviewRepository.InvalidPasswordException;
import toy.project.demo.persistance.ReviewRepository.ReviewNotFoundException;



@Service
@RequiredArgsConstructor
public class ReviewService {

	@Autowired
	ReviewRepository reviewRepository;

	public ReviewService(ReviewRepository reviewRepository) {
		this.reviewRepository = reviewRepository;
	}

	public List<Review> getAllReviews() {
		return reviewRepository.findAll();
	}
	
	
	public Review showReview(Integer seq) throws ReviewNotFoundException {
	    Review review = reviewRepository.findById(seq).orElse(null);

	    if (review != null) {
	        return review;
	    } else {
	        throw new ReviewNotFoundException("해당하는 리뷰를 찾을 수 없습니다.");
	    }
	}
	
	
	

	public Review insertReview(String username, String notename, MultipartFile image, String notePass, String note,
			String sw_name) throws IOException {
		Review review = new Review();
		review.setUsername(username);
		review.setNotename(notename);
		review.setNotePass(notePass);
		review.setNote(note);
		review.setSw_name(sw_name);

// 이미지 데이터가 존재할 때만 이미지 설정
		if (image != null && !image.isEmpty()) {
			byte[] imageBytes = image.getBytes(); // 이미지 바이트 배열 가져오기
			review.setImage(imageBytes);
		}

		return reviewRepository.save(review); // 리뷰 엔티티를 저장하고 리턴
	}

//	public byte[] encodeImage(byte[] imageBytes) {
//		return Base64.getEncoder().encode(imageBytes);
//	}
//
//	public byte[] decodeImage(byte[] imageData) {
//		return Base64.getDecoder().decode(imageData);
//	}

	public byte[] saveImage(MultipartFile imageFile) {
		try {
			return imageFile.getBytes();
		} catch (IOException e) {
// 적절한 예외 처리
			e.printStackTrace();
			return null;
		}
	}

	public Review updateReview(Integer seq, String notename, MultipartFile image, String notePass, String note) throws IOException {
	    Review review = reviewRepository.findById(seq).orElse(null);
	    
	    if (review != null) {
	        if (review.getNotePass().equals(notePass)) {
	            review.setNotename(notename);
	            review.setNotePass(notePass);
	            review.setNote(note);

	            // Check if the image data is null or empty before setting it
	            if (image != null && !image.isEmpty()) {
	                byte[] imageBytes = image.getBytes(); // 이미지 바이트 배열 가져오기
	                review.setImage(imageBytes);
	            }

	            return reviewRepository.save(review); // 리뷰 엔티티를 저장하고 리턴
	        } else {
	            // Handle error when the notePass doesn't match
	            // For example, you can throw an exception or return a specific response
	            throw new IllegalArgumentException("Incorrect notePass");
	        }
	    }
	    
	    return null; // Handle error here if the review is not found
	}
	public Review deleteReview(Integer seq, String notepass) throws ReviewNotFoundException, InvalidPasswordException {
		Review review = reviewRepository.findById(seq).orElse(null);
		if (review != null) {
			if (notepass.equals(review.getNotePass())) {
				System.out.println("삭제되었습니다");
				reviewRepository.delete(review);
				return review;
			} else {
				throw new InvalidPasswordException("비밀번호가 올바르지 않습니다.");
			}
		} else {
			throw new ReviewNotFoundException("해당하는 리뷰를 찾을 수 없습니다.");
		}
	}

}
