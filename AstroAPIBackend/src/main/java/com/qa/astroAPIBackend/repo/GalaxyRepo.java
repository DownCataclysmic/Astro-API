package com.qa.astroAPIBackend.repo;

import java.util.List;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qa.astroAPIBackend.models.Galaxies;

public interface GalaxyRepo extends JpaRepository<Galaxies, Long>{
	
	@Query(value = "SELECT * FROM galaxies", nativeQuery = true)
	public List<Galaxies> allFromGalaxies();
}