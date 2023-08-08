package toy.project.demo.persistance;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import toy.project.demo.domain.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    Optional<Review> findById(Integer seq);
    
   
    
    public class ReviewNotFoundException extends Exception {
        public ReviewNotFoundException(String message) {
            super(message);
        }
    }

    public class InvalidPasswordException extends Exception {
        public InvalidPasswordException(String message) {
            super(message);
        }
    }
 







    
    }


