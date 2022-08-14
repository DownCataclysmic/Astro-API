package com.qa.astroAPIBackend.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Id;

@Entity
public class Planets {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String planetName;
	
	@Column
	private String planetType;
	
	@Column
	private String planetMass;
	
	@Column
	private String planetRadius;
	
	@Column
	private String planetTilt;
	
	@Column
	private String planetDistFromEarth;
	
	@Column
	private String planetDescr;
	
	@Column
	private String planetImgUrl;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlanetName() {
		return planetName;
	}

	public void setPlanetName(String planetName) {
		this.planetName = planetName;
	}

	public String getPlanetType() {
		return planetType;
	}

	public void setPlanetType(String planetType) {
		this.planetType = planetType;
	}

	public String getPlanetMass() {
		return planetMass;
	}

	public void setPlanetMass(String planetMass) {
		this.planetMass = planetMass;
	}

	public String getPlanetRadius() {
		return planetRadius;
	}

	public void setPlanetRadius(String planetRadius) {
		this.planetRadius = planetRadius;
	}

	public String getPlanetTilt() {
		return planetTilt;
	}

	public void setPlanetTilt(String planetTilt) {
		this.planetTilt = planetTilt;
	}

	public String getPlanetDistFromEarth() {
		return planetDistFromEarth;
	}

	public void setPlanetDistFromEarth(String planetDistFromEarth) {
		this.planetDistFromEarth = planetDistFromEarth;
	}

	public String getPlanetDescr() {
		return planetDescr;
	}

	public void setPlanetDescr(String planetDescr) {
		this.planetDescr = planetDescr;
	}

	public String getPlanetImgUrl() {
		return planetImgUrl;
	}

	public void setPlanetImgUrl(String planetImgUrl) {
		this.planetImgUrl = planetImgUrl;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, planetDescr, planetDistFromEarth, planetImgUrl, planetMass, planetName, planetRadius,
				planetTilt, planetType);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Planets other = (Planets) obj;
		return Objects.equals(id, other.id) && Objects.equals(planetDescr, other.planetDescr)
				&& Objects.equals(planetDistFromEarth, other.planetDistFromEarth)
				&& Objects.equals(planetImgUrl, other.planetImgUrl) && Objects.equals(planetMass, other.planetMass)
				&& Objects.equals(planetName, other.planetName) && Objects.equals(planetRadius, other.planetRadius)
				&& Objects.equals(planetTilt, other.planetTilt) && Objects.equals(planetType, other.planetType);
	}

	@Override
	public String toString() {
		return "Planets [id=" + id + ", planetName=" + planetName + ", planetType=" + planetType + ", planetMass="
				+ planetMass + ", planetRadius=" + planetRadius + ", planetTilt=" + planetTilt
				+ ", planetDistFromEarth=" + planetDistFromEarth + ", planetDescr=" + planetDescr + ", planetImgUrl="
				+ planetImgUrl + "]";
	}
}