package restAPI;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import java.util.HashMap;


public class HTTPrequest {
	
	int id;
	
	
	@Test(priority = 1)
	void getuser() {
		
		given()
		
		.when()
		   .get("https://reqres.in/api/users?page=2")
		
		.then()
		   .statusCode(200)
		  .body("page",equalTo(2))
		   .log().all();
		

	}
	 @Test(priority = 2)
	 void createuser() {
		 
		 HashMap data = new HashMap();
		 data.put("name", "alex");
		 data.put("job", "tester");
		 
		 
		  id = given()
		    .contentType("application/json")
		    .body(data)
		    
		    
		    .when()
		      .post("https://reqres.in/api/users")
		      
		      
		      .then()
		        .log().all()
		        .extract()
	            .jsonPath()
	            .getInt("id");
		    
		  
	}
	 
	 @Test(priority = 3)
	  void DeleteUser() {
		
		 when()
		   .delete("https://reqres.in/api/users/"+id)
		 
		.then()
		 .statusCode(204);

	}

}
