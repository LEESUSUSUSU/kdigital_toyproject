package toy.project.persistance;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import toy.project.domain.Member1Domain;

public interface UserRepository extends JpaRepository<Member1Domain, String> {
    List<Member1Domain> getAllMembers();
}
