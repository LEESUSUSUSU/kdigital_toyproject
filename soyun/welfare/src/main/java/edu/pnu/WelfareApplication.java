package edu.pnu;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import edu.pnu.domain.Member1;
import edu.pnu.persistence.Member1Repository;

@SpringBootApplication
public class WelfareApplication  implements CommandLineRunner {

	
	private static final Logger logger = 
			LoggerFactory.getLogger(WelfareApplication.class);
	
	@Autowired
	private Member1Repository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(WelfareApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		for (Member1 member1 : repository.findAll())	{
			logger.info(member1.getMb_name() + " " + member1.getMb_address());
		}
		
	}

}
