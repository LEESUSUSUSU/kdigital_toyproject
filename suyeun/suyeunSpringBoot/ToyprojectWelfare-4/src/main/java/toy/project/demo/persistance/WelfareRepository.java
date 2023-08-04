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
	}
