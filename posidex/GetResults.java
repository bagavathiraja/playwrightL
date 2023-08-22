package posidex;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class GetResults {

	public static void main(String[] args) {

		 String response =	given().header("x-ibm-client-id","c3543dc4-7b1b-4336-801d-c4e09edd78cd").header("Content-Type","application/json").body("{\r\n"
				+ "	\"RequestId\" : \"3131142\",\r\n"
				+ "	\"SourceAuthenticationToken\": \"posidex\",\r\n"
				+ "	\"SourceSystemName\": \"admin\"\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/posidex_dedupe/getresults_v3")
		.then()
		//.log().all()
		.extract().response().asString();
		 
		 JsonPath jsonPath = new JsonPath(response);
	        String name = jsonPath.getString("CustomerResult.Customer[1].Master.Name");
	        String DOB = jsonPath.getString("CustomerResult.Customer[1].Master.Dob");
	        String pan = jsonPath.getString("CustomerResult.Customer[15].Master.Pan");
	        String Address = jsonPath.getString("CustomerResult.Customer[17].Details.Address[0].Address");
	        String City = jsonPath.getString("CustomerResult.Customer[17].Details.Address[0].City");
	        String State = jsonPath.getString("CustomerResult.Customer[17].Details.Address[0].State");
	        String Pin = jsonPath.getString("CustomerResult.Customer[17].Details.Address[0].Pin");
	        
	     

	        System.out.println("Name: " + name);
	        System.out.println("DOB: " + DOB);
	        System.out.println("Pan: " + pan);
	        System.out.println("State: " + Address);
	        System.out.println("City: " + City);
		 
    
	}
}
