package posidex;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class GetResults {

	public static void main(String[] args) {

		given().header("x-ibm-client-id","c3543dc4-7b1b-4336-801d-c4e09edd78cd").header("Content-Type","application/json").body("{\r\n"
				+ "	\"RequestId\" : \"3131142\",\r\n"
				+ "	\"SourceAuthenticationToken\": \"posidex\",\r\n"
				+ "	\"SourceSystemName\": \"admin\"\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/posidex_dedupe/getresults_v3")
		.then()
		.log().all();
	    
	}
}
