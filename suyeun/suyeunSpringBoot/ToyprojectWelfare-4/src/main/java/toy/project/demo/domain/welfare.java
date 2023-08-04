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
public class welfare {

    @Id
    private Integer seq;
    private String sw_name;
    private String sw_address;
    private String sw_tel;
    private String sw_domain;
    private String sw_longitude;
    private String sw_latitude;
    
}


