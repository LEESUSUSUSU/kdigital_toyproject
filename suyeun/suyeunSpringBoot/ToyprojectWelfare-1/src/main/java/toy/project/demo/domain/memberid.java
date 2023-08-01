package toy.project.demo.domain;

import jakarta.persistence.Column;
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
public class memberid {
    @Id
    private String username;
    @Column(length = 255) // Use a smaller length (e.g., 191) that works with your application
    private String password;
    @Column(length = 255) // Use a smaller length (e.g., 191) that works with your application
    private String tel;
    @Column(length = 255) // Use a smaller length (e.g., 191) that works with your application
    private String email;

}
