package edu.pnu;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.pnu.domain.Member1;
import edu.pnu.persistence.Member1Repository;

@SpringBootTest
public class Member1Initialize {

	@Autowired
	Member1Repository mem1Repo;
	
	
	@Test
	public void doWork() {
		mem1Repo.save(Member1.builder()
				.seq(100)
				.mb_name("test")
				.mb_address("test")
				.build());
	}
}
