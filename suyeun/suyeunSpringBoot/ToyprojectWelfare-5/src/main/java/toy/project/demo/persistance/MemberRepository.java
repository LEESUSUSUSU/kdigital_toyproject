package toy.project.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import toy.project.demo.domain.Member;

public interface MemberRepository extends JpaRepository<Member, String> {
	Member findByUsername(String username);

    boolean existsByUsername(String username);
}
