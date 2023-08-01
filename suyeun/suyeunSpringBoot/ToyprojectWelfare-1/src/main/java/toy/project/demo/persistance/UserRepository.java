package toy.project.demo.persistance;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import toy.project.demo.domain.member1;

public interface UserRepository extends JpaRepository<member1, String> {
    List<member1> findAll();
}
