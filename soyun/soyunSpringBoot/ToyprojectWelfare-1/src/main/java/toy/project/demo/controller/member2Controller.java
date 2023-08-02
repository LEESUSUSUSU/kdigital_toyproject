package toy.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.member2;
import toy.project.demo.persistance.member2Repository;

@RestController
public class member2Controller {

	@Autowired
	private member2Repository repository;
	
	@RequestMapping("/member2")
	public List<member2> getMembers1()	{
		return repository.findAll();
	}
}
