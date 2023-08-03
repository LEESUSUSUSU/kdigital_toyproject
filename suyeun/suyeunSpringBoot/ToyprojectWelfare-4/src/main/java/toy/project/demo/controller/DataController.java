package toy.project.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import toy.project.demo.domain.memberid;
import toy.project.demo.persistance.MemberRepository;
import toy.project.demo.persistance.MembersRepository;
import toy.project.demo.persistance.UserRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DataController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private MembersRepository membersRepository;

	@Autowired
	private MemberRepository memberRepository;

	@GetMapping("/main/members")
	public List<Map<String, Object>> getAllMembers() {
		List<Object[]> combinedDataList = userRepository.findAllCombinedData();

		List<Map<String, Object>> result = new ArrayList<>();
		for (Object[] row : combinedDataList) {
			Map<String, Object> memberData = new HashMap<>();
			memberData.put("name", row[0]);
			memberData.put("longitude", row[1]);
			memberData.put("latitude", row[2]);
			result.add(memberData);
		}

		return result;
	}
	
	@PostMapping("/searchName")
    public ResponseEntity<List<String>> searchName(@RequestBody Map<String, String> request) {
        String name = request.get("name"); // Assuming the JSON data contains a "name" field

        if (name == null || name.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonList("Name cannot be empty."));
        }

        List<Object[]> combinedDataList = memberRepository.findAllCombinedData(name);

        List<Map<String, Object>> result = new ArrayList<>();
        for (Object[] row : combinedDataList) {
            Map<String, Object> memberData = new HashMap<>();
            memberData.put("seq", row[0]);
            memberData.put("name", row[1]);
            memberData.put("maddress", row[2]);
            memberData.put("tel", row[3]);
            memberData.put("domain", row[4]);
            memberData.put("longitude", row[5]);
            memberData.put("latitude", row[6]);
            result.add(memberData);
        }  
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}


