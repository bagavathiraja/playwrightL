package karza;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.List;


public class nameSimilar {
	
	public static void main(String[] args) {

		given().header("x-ibm-client-id","dc52d3cf-c452-4d27-91e0-68f31d5c7669").header("Content-Type","application/json")
		.body("{\r\n"
				+ "	\"esbRequest\": {\r\n"
				+ "		\"header\": {\r\n"
				+ "			\"apiVersion\": \"\",\r\n"
				+ "			\"channelID\": \"ESB\",\r\n"
				+ "			\"deviceID\": \"\",\r\n"
				+ "			\"languageId\": \"\",\r\n"
				+ "			\"serviceName\": \"NAMESIMILARITY\",\r\n"
				+ "			\"os\": \"\",\r\n"
				+ "			\"uniqueReqNo\": \"testbre61212\",\r\n"
				+ "			\"timestamp\": \"q1211\",\r\n"
				+ "			\"geoLocation\": \"\"\r\n"
				+ "		},\r\n"
				+ "\r\n"
				+ "		\"request\": {\r\n"
				+ "			\"name1\": \"SHIRHATTI OMKAR MILIND\",\r\n"
				+ "  			\"name2\": \"SHIRHATTI OMKAR\",\r\n"
				+ "  			\"type\": \"individual\",\r\n"
				+ " 			\"preset\": \"L\"\r\n"
				+ "		}\r\n"
				+ "	}\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/api/karzaAuthSvc")
		.then()
		.log().all()
        .body("esbResponse.header.serviceName", instanceOf(String.class))
		.body("esbResponse.header.apiVersion", instanceOf(String.class));
	//	.body("esbResponse.response.statusCode", instanceOf(Integer.class))
	//	.body("esbResponse.response.result", instanceOf(Boolean.class));
				    
	}
}
