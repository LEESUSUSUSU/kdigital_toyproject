package toy.project.demo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import toy.project.demo.domain.combineddata1;

public interface MembersRepository extends JpaRepository<combineddata1, String> {


		  List<combineddata1> findAll();
		
	}