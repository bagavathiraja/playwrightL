package restAPI;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class Validate {
	
	@Test
	private void headersvalidate() {
			
		given()
		
		.when()
		  .get("https://www.google.co.in/")
		  
		.then()
		.header("Content-Type","text/html; charset=ISO-8859-1")
		.header("Content-Encoding","gzip");
	 

	}
	
	@Test
	void cookiesvalidate() {
		
		when()
		.get("https://www.google.co.in/")
		
		.then()
		.cookies("AEC","AUEFqZei4RFv1G0fkIbA5RMv3FCVBsbPvaPyBFgC95NGdB498PHt89RHKp0")
		.log().all();

	}

}
