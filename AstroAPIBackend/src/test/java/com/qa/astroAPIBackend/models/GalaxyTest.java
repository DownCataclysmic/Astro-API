package com.qa.astroAPIBackend.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;

public class GalaxyTest {
	@BeforeAll
	public static void buildGalaxy() {
		System.out.println("Building Galaxy");
		testGalaxy = new Galaxies("Andromeda", "Spiral Galaxy", "67 Earth Masses", "0.88 Earth Radii","Red","7889","6557","65","https://andromeda.jpg","Andromeda is a galaxy");
	}

	@Test
	public void testEquals() {
		EqualsVerifier.simple().forClass(Galaxies.class).verify();
	}

	@Test
	public void constructors_Galaxy_Galaxy) {
		// Create Cat
		Galaxies galaxyOne = new Galaxies();

		assertTrue(galaxyOne instanceof Galaxies == true);

		Galaxies galaxyTwo = new Galaxies("Andromeda", "Spiral Galaxy", "67 Earth Masses", "0.88 Earth Radii","Red","7889","6557","65","https://andromeda.jpg","Andromeda is a galaxy");

		assertTrue(galaxyTwo instanceof Galaxies == true);
		assertEquals("Andromeda", galaxyTwo.getGalaxyName());
		assertEquals("Andromeda", galaxyTwo.getGalaxyName());
		

	}

	// Unit testing we are testing the functions in seldom
	@Test
	public void toString_String_GalaxyInstance() {
		String expecting = "Galaxy [GalaxyID=" + testGalaxy.getGalaxyID() + ", galaxy_name=" + testGalaxy.getGalaxyName() + ", galaxy_name="
				+ testGalaxy.getGalaxyName() + "]";

		assertEquals(expecting, testGalaxy.toString());
	}

	// Test some getters and setters and test your constructor

	// Try and make your tests first -- TDD -- Code work for your tests

}
}

}
