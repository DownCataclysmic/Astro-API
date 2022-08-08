package com.qa.astroAPIBackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qa.astroAPIBackend.models.Stars;

public interface AstroRepo extends JpaRepository<Stars, Long>{
	
	@Query(value = "SELECT * FROM stars", nativeQuery = true)
	public List<Stars> 
}