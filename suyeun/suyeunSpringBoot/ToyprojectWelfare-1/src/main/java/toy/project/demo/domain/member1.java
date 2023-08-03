package toy.project.demo.domain;


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
public class member1 {
    @Id
    private String seq;
    private String mb_name;
    private String mb_address;
    private String mb_tel;
    private String mb_domain;
    private String mb_longitude;
    private String mb_latitude;
}


