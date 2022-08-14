package com.qa.astroAPIBackend.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Galaxies {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Override
	public String toString() {
		return "Galaxies [id=" + id + ", galaxyName=" + galaxyName + ", galaxyType=" + galaxyType + ", galaxyNumStars="
				+ galaxyNumStars + ", galaxyDist=" + galaxyDist + ", galaxyWidth=" + galaxyWidth + ", galaxyBrightness="
				+ galaxyBrightness + ", galaxyImgUrl=" + galaxyImgUrl + ", galaxyDescr=" + galaxyDescr + "]";
	}

	@Column
	private String galaxyName;

	@Column
	private String galaxyType;
	
	@Column
	private String galaxyNumStars;
	
	@Column
	private String galaxyDist;
	
	@Column
	private String galaxyWidth;
	
	@Column
	private String galaxyBrightness;
	
	@Column
	private String galaxyImgUrl;
	
	public String getGalaxyImgUrl() {
		return galaxyImgUrl;
	}

	public void setGalaxyImgUrl(String galaxyImgUrl) {
		this.galaxyImgUrl = galaxyImgUrl;
	}

	@Column
	private String galaxyDescr;
	

	public String getGalaxyDescr() {
		return galaxyDescr;
	}

	public void setGalaxyDescr(String galaxyDescr) {
		this.galaxyDescr = galaxyDescr;
	}

	@Override
	public int hashCode() {
		return Objects.hash(galaxyBrightness, galaxyDescr, galaxyDist, galaxyImgUrl, galaxyName, galaxyNumStars,
				galaxyType, galaxyWidth, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Galaxies other = (Galaxies) obj;
		return Objects.equals(galaxyBrightness, other.galaxyBrightness)
				&& Objects.equals(galaxyDescr, other.galaxyDescr) && Objects.equals(galaxyDist, other.galaxyDist)
				&& Objects.equals(galaxyImgUrl, other.galaxyImgUrl) && Objects.equals(galaxyName, other.galaxyName)
				&& Objects.equals(galaxyNumStars, other.galaxyNumStars) && Objects.equals(galaxyType, other.galaxyType)
				&& Objects.equals(galaxyWidth, other.galaxyWidth) && Objects.equals(id, other.id);
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGalaxyName() {
		return galaxyName;
	}

	public void setGalaxyName(String galaxyName) {
		this.galaxyName = galaxyName;
	}

	public String getGalaxyType() {
		return galaxyType;
	}

	public void setGalaxyType(String galaxyType) {
		this.galaxyType = galaxyType;
	}

	public String getGalaxyNumStars() {
		return galaxyNumStars;
	}

	public void setGalaxyNumStars(String galaxyNumStars) {
		this.galaxyNumStars = galaxyNumStars;
	}

	public String getGalaxyDist() {
		return galaxyDist;
	}

	public void setGalaxyDist(String galaxyDist) {
		this.galaxyDist = galaxyDist;
	}

	public String getGalaxyWidth() {
		return galaxyWidth;
	}

	public void setGalaxyWidth(String galaxyWidth) {
		this.galaxyWidth = galaxyWidth;
	}

	public String getGalaxyBrightness() {
		return galaxyBrightness;
	}

	public void setGalaxyBrightness(String galaxyBrightness) {
		this.galaxyBrightness = galaxyBrightness;
	}
		
}
