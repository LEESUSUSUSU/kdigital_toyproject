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

	public class combineddata1 {
		
		@Id
		
		private String name;
		private String mb_longitude;
		private String mb_latitude;
		
		
		

	}