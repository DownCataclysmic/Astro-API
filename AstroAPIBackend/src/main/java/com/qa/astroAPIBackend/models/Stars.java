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
	private Long starMass;
	
	@Column
	private Long starRadius;
	
	@Column
	private String starColour;
	
	@Column
	@Min(0)
	private Long starTemp;
	
	@Column
	private Long starDistFromEarth;
	
	@Column
	private Long starBrightness;
	

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
	
	public Long getStarMass() {
		return starMass;
	}
	
	public void setStarMass(Long starMass) {
		this.starMass = starMass;
	}
	
	public Long getStarRadius() {
		return starRadius;
	}
	
	public void setStarRadius(Long starRadius) {
		this.starRadius = starRadius;
	}
	
	public String getStarColour() {
		return starColour;
	}
	
	public void setStarColour(String starColour) {
		this.starColour = starColour;
	}
	
	public Long getStarTemp() {
		return starTemp;
	}
	
	public void setStarTemp(Long starTemp) {
		this.starTemp = starTemp;
	}
	
	public Long getStarDistFromEarth() {
		return starDistFromEarth;
	}
	
	public void setStarDistFromEarth(Long starDistFromEarth) {
		this.starDistFromEarth = starDistFromEarth;
	}
	
	public Long getStarBrightness() {
		return starBrightness;
	}
	
	public void setStarBrightness(Long starBrightness) {
		this.starBrightness = starBrightness;
	}
	
	@Override
	public String toString() {
		return "Star ID = " + id + "\n"
				+ "Star Classification = " + starClass + "\n"
				+ "Name of the Star = " + starName + "\n" 
				+ "Mass of the Star = " + starMass + "\n" 
				+ "Star Radius = " + starRadius + "\n" 
				+ "Star Colour = " + starColour + "\n" 
				+ "Temperature of the Star (K) " + starTemp + "\n" 
				+ "Distance From Earth = " + starDistFromEarth + "\n" 
				+ "Brightness of the Star = " + starBrightness;
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