package edu.pnu.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Member1 {

	@Id
	private int seq;
	private String mb_name;
	private String mb_address;
	private String mb_tel;
	private String mb_domain;
	private String mb_longtitude;
	private String mb_latitude;
	
}
