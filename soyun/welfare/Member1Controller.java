package edu.pnu.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.Member1;
import edu.pnu.persistence.Member1Repository;

@RestController
public class Member1Controller {
	
	
	@Autowired
	private Member1Repository repository;
	
	@RequestMapping("/")
	public Iterable<Member1> getMembers1()	{
		return repository.findAll();
	}
}
