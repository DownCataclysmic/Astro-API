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

import com.qa.astroAPIBackend.models.Stars;
import com.qa.astroAPIBackend.repo.AstroRepo;

@RestController
public class AstroController {
	
	@Autowired
	private AstroRepo astroRepo;
	
	@GetMapping(value = "/")
	public String getPage() {
		return "Welcome";
	}
	
	@GetMapping(value = "/stars")
	public List<Stars> getStars() {
		return astroRepo.findAll();
	}
	
	//Create Star
	@PostMapping(value = "/save")
	public String saveStars(@RequestBody Stars stars) {
		astroRepo.save(stars);
		return stars.toString();
	}
	
	//Update Star
	@PutMapping(value = "update/{id}")
	public String updateStars(@PathVariable Long id, @RequestBody Stars stars) {
		Stars updatedStars = astroRepo.findById(id).get();
		
		updatedStars.setStarName(stars.getStarName());
		updatedStars.setStarMass(stars.getStarMass());
		updatedStars.setStarRadius(stars.getStarRadius());
		updatedStars.setStarColour(stars.getStarColour());
		updatedStars.setStarTemp(stars.getStarTemp());
		updatedStars.setStarDistFromEarth(stars.getStarDistFromEarth());
		updatedStars.setStarBrightness(stars.getStarBrightness());
		
		astroRepo.save(updatedStars);
		return "We have noted your changes...human...";
	}
	
	//Delete Star
	@DeleteMapping(value = "/delete/{id}")
	public String deleteStars(@PathVariable Long id) {
		Stars deleteStars = astroRepo.findById(id).get();
		astroRepo.delete(deleteStars);
		return "About to vanquish " + id + " from the universe";
	}
}

