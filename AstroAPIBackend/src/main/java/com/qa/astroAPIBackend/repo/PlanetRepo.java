package com.qa.astroAPIBackend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.qa.astroAPIBackend.models.Planets;

public interface PlanetRepo extends JpaRepository<Planets, Long>{
	
	@Query(value = "SELECT * FROM planets", nativeQuery = true)
	public List<Planets> allFromPlanets();
}