package toy.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.member1;
import toy.project.demo.persistance.member1Repository;

@RestController
public class member1Controller {

	@Autowired
	private member1Repository repository;
	
	@RequestMapping("/member1")
	public List<member1> getMembers1()	{
		return repository.findAll();
	}
}
