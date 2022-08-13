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

import com.qa.astroAPIBackend.models.Galaxies;
import com.qa.astroAPIBackend.repo.GalaxyRepo;

@RestController
public class GalaxyController {
	
	@Autowired
	private GalaxyRepo galaxyRepo;
	
	@GetMapping(value = "/galaxies")
	public List<Galaxies> getGalaxies() {
		return galaxyRepo.findAll();
	}
	
	//Create Star
	@PostMapping(value = "/savegalaxy")
	public String saveGalaxies(@RequestBody Galaxies galaxies) {
		galaxyRepo.save(galaxies);
		return galaxies.toString();
	}
	
	//Update Star
	@PutMapping(value = "updategalaxies/{id}")
	public String updateGalaxies(@PathVariable Long id, @RequestBody Galaxies galaxies) {
		Galaxies updatedGalaxies = galaxyRepo.findById(id).get();
		
		updatedGalaxies.setGalaxyName(galaxies.getGalaxyName());
		updatedGalaxies.setGalaxyType(galaxies.getGalaxyType());
		updatedGalaxies.setGalaxyNumStars(galaxies.getGalaxyNumStars());
		updatedGalaxies.setGalaxyDist(galaxies.getGalaxyDist());
		updatedGalaxies.setGalaxyWidth(galaxies.getGalaxyWidth());
		updatedGalaxies.setGalaxyBrightness(galaxies.getGalaxyBrightness());
		
		galaxyRepo.save(updatedGalaxies);
		return "We have noted your changes...human...";
	}
	
	//Delete Star
	@DeleteMapping(value = "/deletegalaxies/{id}")
	public String deleteGalaxies(@PathVariable Long id) {
		Galaxies deleteGalaxies = galaxyRepo.findById(id).get();
		galaxyRepo.delete(deleteGalaxies);
		return "About to vanquish " + id + " from the universe";
	}
}