package crmService;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.List;


public class CreateCase {
	
	public static void main(String[] args) {

		given().header("x-ibm-client-id","dc52d3cf-c452-4d27-91e0-68f31d5c7669").header("Origin","uat.quiklyz.com").header("Content-Type","application/json")
		.body("{\r\n"
				+ "    \"esbRequest\": {\r\n"
				+ "        \"header\": {\r\n"
				+ "            \"apiVersion\": \"1\",\r\n"
				+ "            \"channelID\": \"LP\",\r\n"
				+ "            \"deviceID\": \"2\",\r\n"
				+ "            \"serviceName\": \"Ceatecase\",\r\n"
				+ "            \"uniqueReqNo\": \"12101120717\",\r\n"
				+ "            \"timestamp\": \"2022-03-17T00:00:00\"\r\n"
				+ "        },\r\n"
				+ "        \"request\": {\r\n"
				+ "            \"CaseInfoDetails\": {\r\n"
				+ "                \"CaseDescription\": \"dfhdsfhdshf\",\r\n"
				+ "                \"CaseType\": \"17\",\r\n"
				+ "                \"Category\": \"2\",\r\n"
				+ "                \"CustomerID\": \"8693891582\",\r\n"
				+ "                \"Email\": \"jd@yahoo.co.in\",\r\n"
				+ "                \"Channel\": \"2\",\r\n"
				+ "                \"MobileNumber\": \"8693891582\",\r\n"
				+ "                \"Name\": \"Samir\",\r\n"
				+ "                \"SubCaseType\": \"29\",\r\n"
				+ "                \"ExcessKMRequested\":\"\",\r\n"
				+ "                \"ExcessTenureRequested\":\"\"\r\n"
				+ "\r\n"
				+ "            },\r\n"
				+ "            \"HeaderInfo\": {\r\n"
				+ "                \"CallingUser\": \"\",\r\n"
				+ "                \"Module\": \"\",\r\n"
				+ "                \"TimeStamp\": \"\",\r\n"
				+ "                \"UniqueReqno\": \"\"\r\n"
				+ "            }\r\n"
				+ "        }\r\n"
				+ "    }\r\n"
				+ "}")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/crm/casecreate")
		.then()
		.log().all().body("esbResponse.response.ErrorDetails", instanceOf(List.class))
        .body("esbResponse.header.serviceName", instanceOf(String.class));
			    
	}
}
