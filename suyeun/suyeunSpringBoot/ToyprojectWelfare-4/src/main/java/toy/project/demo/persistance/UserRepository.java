package toy.project.demo.persistance;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import toy.project.demo.domain.member1;
import toy.project.demo.domain.member2;

public interface UserRepository extends JpaRepository<member1, String> {
	
	
	@Query(value = "SELECT m1.mb_name AS name, m1.mb_longitude AS longitude, m1.mb_latitude AS latitude\r\n"
			+ "	FROM Member1 m1\r\n"
			+ "	UNION ALL\r\n"
			+ "	SELECT m2.mb_name, m2.mb_longitude, m2.mb_latitude\r\n"
			+ "	FROM Member2 m2;", nativeQuery = true)
	
	  List<Object[]> findAllCombinedData();
    
    
}

