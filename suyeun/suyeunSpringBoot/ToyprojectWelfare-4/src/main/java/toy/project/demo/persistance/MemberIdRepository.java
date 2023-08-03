package toy.project.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import toy.project.demo.domain.memberid;

public interface MemberIdRepository extends JpaRepository<memberid, String> {
    memberid findByUsername(String username);

    boolean existsByUsername(String username);
}
