package edu.pnu.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.pnu.domain.Food;


public interface FoodRepository extends JpaRepository<Food, Integer> {
    @Query(value = "SELECT * FROM food f WHERE f.name LIKE %?%", nativeQuery = true)
    List<Food> findByName(String searchName);

}