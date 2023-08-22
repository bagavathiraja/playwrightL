package posidex;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class GenerateRequestID {

	public static void main(String[] args) {

		RestAssured.baseURI = "https://esbuat.mmfsl.com/mahindrafinance/uat/";
		given().header("x-ibm-client-id","c3543dc4-7b1b-4336-801d-c4e09edd78cd")
		.when()
		.post("posidex_dedupe/generaterequestid")
		.then()
		.log().all()
		.assertThat().statusCode(200)
		.body("Seq_No", instanceOf(Integer.class))
		.body("Seq_No.toString().length()", equalTo(8));             
	}	
}
