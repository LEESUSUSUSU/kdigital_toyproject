package toy.project.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class member2 {
	
	@Id
	private String seq;
	private String mb_name;
	private String mb_address;
	private String mb_tel;
	private String mb_longitude;
	private String mb_latitude;
	private String mb_gu;
	
	

}