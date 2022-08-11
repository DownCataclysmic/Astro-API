package com.qa.astroAPIBackend.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.Min;

import javax.persistence.Id;

@Entity
public class Stars {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String starClass;
	
	@Column
	private String starName;
	
	@Column
	private String starMass;
	
	@Column
	private String starRadius;
	
	@Column
	private String starColour;
	
	@Column
	private String starTemp;
	
	@Column
	private String starDistFromEarth;
	
	@Column
	private String starBrightness;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStarClass() {
		return starClass;
	}
	public void setStarClass(String starClass) {
		this.starClass = starClass;
	}
	public String getStarName() {
		return starName;
	}
	public void setStarName(String starName) {
		this.starName = starName;
	}
	public String getStarMass() {
		return starMass;
	}
	public void setStarMass(String starMass) {
		this.starMass = starMass;
	}
	public String getStarRadius() {
		return starRadius;
	}
	public void setStarRadius(String starRadius) {
		this.starRadius = starRadius;
	}
	public String getStarColour() {
		return starColour;
	}
	public void setStarColour(String starColour) {
		this.starColour = starColour;
	}
	public String getStarTemp() {
		return starTemp;
	}
	public void setStarTemp(String starTemp) {
		this.starTemp = starTemp;
	}
	public String getStarDistFromEarth() {
		return starDistFromEarth;
	}
	public void setStarDistFromEarth(String starDistFromEarth) {
		this.starDistFromEarth = starDistFromEarth;
	}
	public String getStarBrightness() {
		return starBrightness;
	}
	public void setStarBrightness(String starBrightness) {
		this.starBrightness = starBrightness;
	}
	@Override
	public String toString() {
		return "Star ID = " + id + "\n"
				+ "Star Classification = " + starClass + "\n"
				+ "Name of the Star = " + starName + "\n" 
				+ "Mass of the Star = " + starMass + "Solar Masses" + "\n" 
				+ "Star Radius = " + starRadius + "Solar Radii" + "\n" 
				+ "Star Colour = " + starColour + "\n" 
				+ "Temperature of the Star " + starTemp + "K" + "\n" 
				+ "Distance From Earth = " + starDistFromEarth + " Parsecs" + "\n" 
				+ "Brightness of the Star (Apparent Magnitude) = " + starBrightness;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id, starBrightness, starClass, starColour, starDistFromEarth, starMass, starName,
				starRadius, starTemp);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stars other = (Stars) obj;
		return Objects.equals(id, other.id) && Objects.equals(starBrightness, other.starBrightness)
				&& Objects.equals(starClass, other.starClass) && Objects.equals(starColour, other.starColour)
				&& Objects.equals(starDistFromEarth, other.starDistFromEarth)
				&& Objects.equals(starMass, other.starMass) && Objects.equals(starName, other.starName)
				&& Objects.equals(starRadius, other.starRadius) && Objects.equals(starTemp, other.starTemp);
	}
	
	
}