package com.qa.astroAPIBackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.astroAPIBackend.models.Planets;
import com.qa.astroAPIBackend.repo.PlanetRepo;

@RestController
public class PlanetController {
	
	@Autowired
	private PlanetRepo planetRepo;
	
	@GetMapping(value = "/planets")
	public List<Planets> getPlanets() {
		return planetRepo.findAll();
	}
	
	//Create Star
	@PostMapping(value = "/saveplanet")
	public String savePlanets(@RequestBody Planets planets) {
		planetRepo.save(planets);
		return planets.toString();
	}
	
	//Update Star
	@PutMapping(value = "updateplanets/{id}")
	public String updatePlanets(@PathVariable Long id, @RequestBody Planets planets) {
		Planets updatedPlanets = planetRepo.findById(id).get();
		
		updatedPlanets.setPlanetName(planets.getPlanetName());
		updatedPlanets.setPlanetType(planets.getPlanetType());
		updatedPlanets.setPlanetMass(planets.getPlanetMass());
		updatedPlanets.setPlanetRadius(planets.getPlanetRadius());
		updatedPlanets.setPlanetTilt(planets.getPlanetTilt());
		updatedPlanets.setPlanetDistFromEarth(planets.getPlanetDistFromEarth());
		updatedPlanets.setPlanetDescr(planets.getPlanetDescr());
		updatedPlanets.setPlanetImgUrl(planets.getPlanetImgUrl());
		
		planetRepo.save(updatedPlanets);
		return "We have noted your changes...human...";
	}
	
	//Delete Star
	@DeleteMapping(value = "/deleteplanets/{id}")
	public String deletePlanets(@PathVariable Long id) {
		Planets deletePlanets = planetRepo.findById(id).get();
		planetRepo.delete(deletePlanets);
		return "About to vanquish " + id + " from the universe";
	}
}