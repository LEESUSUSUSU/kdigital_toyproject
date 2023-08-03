package toy.project.demo.persistance;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import toy.project.demo.domain.Member;


public interface MemberRepository extends JpaRepository<Member, Long> {

    @Query(value = "SELECT seq AS seq, mb_name AS name, mb_address AS maddress, mb_tel AS tel, mb_domain AS domain, mb_longitude AS longitude, mb_latitude AS latitude, NULL AS gu, NULL AS longtitude1\r\n"
            + "FROM Member1\r\n"
            + "WHERE mb_name = :name\r\n"
            + "UNION\r\n"
            + "SELECT seq AS seq, mb_name AS name, mb_address AS maddress, mb_tel AS tel, NULL AS domain, mb_longitude AS longitude, mb_latitude AS latitude, mb_gu AS gu, mb_longtitude AS longitude1\r\n"
            + "FROM Member2\r\n"
            + "WHERE mb_name = :name", nativeQuery = true)
    List<Map<String, Object>> findAllCombinedData(@Param("name") String name);

}