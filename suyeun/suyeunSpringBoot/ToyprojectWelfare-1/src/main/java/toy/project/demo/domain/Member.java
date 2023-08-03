package toy.project.demo.domain;

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
public class Member {
    
    private Integer seq;
    private String name;
    private String maddress;
    private String tel;
    private String domain;
    private String longitude;
    private String latitude;
    private String gu;

}

@Entity
class Member1 extends Member {
    @Id
    private String seq;
    private String mb_name;
    private String mb_address;
    private String mb_tel;
    private String mb_domain;
    private String mb_longitude;
    private String mb_latitude;
}

@Entity
class Member2 extends Member {
    @Id
    private String seq;
    private String mb_name;
    private String mb_address;
    private String mb_tel;
    private String mb_longitude;
    private String mb_latitude;
    private String mb_gu; 
}
