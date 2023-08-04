package toy.project.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.welfare;
import toy.project.demo.persistance.WelfareRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DataController {

	@Autowired
	private WelfareRepository welfareRepository;

	@GetMapping("/")
	public String home() {
		List<welfare> members = welfareRepository.findAll();

		return "home";
	}

	// 이름 , 경도 , 위도
	@GetMapping("/main/members")
	public List<Map<String, Object>> getAllMembers() {
		List<Object[]> Data = welfareRepository.welfareData();

		List<Map<String, Object>> result = new ArrayList<>();
		for (Object[] row : Data) {
			Map<String, Object> memberData = new HashMap<>();
			memberData.put("sw_name", row[0]);
			memberData.put("sw_longitude", row[1]);
			memberData.put("sw_latitude", row[2]);
			result.add(memberData);
		}

		return result;
	}

	// 검색
	 @GetMapping("/main/search/{keyword}")
	    public List<Map<String, Object>> searchWelfare(@PathVariable String keyword) {
	        List<Object[]> data = welfareRepository.searchData(keyword);
	        List<Map<String, Object>> search = new ArrayList<>();
	        for (Object[] row : data) {
	            Map<String, Object> searchData = new HashMap<>();
	            searchData.put("sw_name", row[1]);
	            searchData.put("sw_address", row[2]);
	            searchData.put("sw_tel", row[3]);
	            searchData.put("sw_domain", row[4]);
	            searchData.put("sw_longitude", row[5]);
	            searchData.put("sw_latitude", row[6]);
	            search.add(searchData);
	        }
	        return search;
	    }
	 
	 
	}
