package toy.project.demo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import toy.project.demo.domain.welfare;

public interface WelfareRepository extends JpaRepository<welfare, String> {
		
	 @Query(value = "select sw_name as name, sw_longitude as longitude, sw_latitude as latitude from welfare", nativeQuery = true)
	    List<Object[]> welfareData(); 
	    
	    @Query(value = "select * from welfare where sw_name = :keyword", nativeQuery = true)
	    List<Object[]> searchData(@Param("keyword") String paramValue);
	    
	    @Query(value = "SELECT seq, username,notename FROM review WHERE sw_name = :keyword ORDER BY seq DESC LIMIT 5", nativeQuery = true)
	    List<Object[]> reviewData(@Param("keyword") String paramValue);
	    
	    @Query(value = "SELECT * FROM Review  WHERE seq = :seq AND sw_name = :keyword",nativeQuery = true)
	    List<Object[]> dataAll(@Param("seq") Integer seq, @Param("keyword") String keyword);
	    
	}
