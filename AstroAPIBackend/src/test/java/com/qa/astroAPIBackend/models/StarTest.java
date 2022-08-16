package com.qa.astroAPIBackend.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import nl.jqno.equalsverifier.EqualsVerifier;

public class StarTest {
	static Stars testStars;

	@BeforeAll
	public static void buildStar() {
		System.out.println("Building Star");
		testStars = new Stars("O", "The Sun", "67 Earth Masses", "0.88 Earth Radii","Red","7889","6557","65","https://sun.jpg","The Sun is a star");
	}

	@Test
	public void testEquals() {
		EqualsVerifier.simple().forClass(Stars.class).verify();
	}

	@Test
	public void constructors_Stars_Stars() {
		// Create Cat
		Stars starOne = new Stars();

		assertTrue(starOne instanceof Stars == true);

		Stars starTwo = new Stars("O", "The Sun", "67 Earth Masses", "0.88 Earth Radii","Red","7889","6557","65","https://sun.jpg","The Sun is a star");

		assertTrue(starTwo instanceof Stars == true);
		assertEquals("The Sun", starTwo.getStarName());
		assertEquals("The Sun", starTwo.getStarName());
		
//		Cat catOne = new Cat();
//
//		assertTrue(catOne instanceof Cat == true);

	}

	// Unit testing we are testing the functions in seldom
	@Test
	public void toString_String_StarInstance() {
		String expecting = "Stars [starID=" + testStars.getStarID() + ", star_name=" + testStars.getStarName() + ", star_name="
				+ testStar.getStarName() + "]";

		assertEquals(expecting, testStar.toString());
	}

	// Test some getters and setters and test your constructor

	// Try and make your tests first -- TDD -- Code work for your tests

}
}
