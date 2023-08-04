package toy.project.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;

import toy.project.demo.domain.member;

public interface MemberRepository extends JpaRepository<member, String> {
    member findByUsername(String username);

    boolean existsByUsername(String username);
}
