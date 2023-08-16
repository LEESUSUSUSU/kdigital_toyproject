package toy.project.demo.domain;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq")
    private Integer id;
    private String username;
    private String notename;
    private String notePass;
    private String sw_name;
//    @Lob
//    @Column(columnDefinition = "MEDIUMBLOB")
//    private byte[] image;
    private String note;
 

    

    // Getter and Setter methods for the fields (you can generate them using Lombok)
}
