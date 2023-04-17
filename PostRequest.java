package restAPI;

import org.json.JSONObject;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import java.util.HashMap;

public class PostRequest {
	
	
	@Test
	void Hashmap() {
		HashMap data =  new HashMap();
		data.put("name", "alex");
		data.put("location", "india");
		data.put("phone", "55555");
		
		String courseAR[] = {"Java","python"};
		
		data.put("courses",courseAR);
		
		given()
		  .contentType("application/json")
		  .body(data)
		  
		  .when()
		   .post("http://localhost:3000/students")
		   
		   .then()
		    .statusCode(201)
		    .body("name",equalTo("alex"))
		    .log().all();
	}
	@Test
	void Orgjson() {
		
		JSONObject data1 = new JSONObject();
		data1.put("name","baga");
		data1.put("location","tirunelveli");
		data1.put("phone", "77777");
		

		String courseAR1[] = {"Javascript","python"};
		
		data1.put("courses",courseAR1);
		
		
		
		
		given()
		  .contentType("application/json")
		  .body(data1.toString())
		  
		  .when()
		   .post("http://localhost:3000/students")
		   
		   .then()
		    .statusCode(201)
		   // .body("name",equalTo("baga"))
		    .log().all();
		}
	
	


	
	
	
	
	
}
