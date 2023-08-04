package toy.project.demo.persistance;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import toy.project.demo.domain.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    Optional<Review> findById(Integer seq);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Review WHERE seq = :seq AND notePass = :notePass")
    void deleteReviewBySeqAndNotePass(@Param("seq") Integer seq, @Param("notePass") String notePass);
    }


