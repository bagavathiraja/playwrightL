package hunter;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class HunterSanity {
	
	public String token ;

	public static void main(String[] args) {

		String token = given().header("x-ibm-client-id","dc52d3cf-c452-4d27-91e0-68f31d5c7669").header("Content-Type","application/json").header("X-Correlation-Id","b3d27f9b-d21d-327c-164e-7fb6776f87b0")
		.body("{\r\n"
				+ "    \"client_id\": \"TW1dzS3ebdvJxjyNq3l5FViaBwbtb3HF\",\r\n"
				+ "    \"client_secret\": \"d4cmpjAiOAfqy3Zd\"\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/experian/Token")
		.then()
		.log().all()
		.extract().path("access_token");
        System.out.println("Access Token: " + token);;
        
        HunterSanity test = new HunterSanity();
        test.ExperianAPI(token);
          
	}
	
	public void ExperianAPI(String token) {
		
		given().header("x-ibm-client-id","dc52d3cf-c452-4d27-91e0-68f31d5c7669").header("Content-Type","application/json")
		.header("Authorization","Bearer "+ token)
		.body("{\r\n"
				+ "	\"header\": {\r\n"
				+ "		\"tenantId\": \"4719969473fc4d9f93b8ca788566f1\",\r\n"
				+ "		\"requestType\": \"HU-ML\",\r\n"
				+ "		\"clientReferenceId\": \"UAT-005\",\r\n"
				+ "		\"expRequestId\": \"\",\r\n"
				+ "		\"messageTime\": \"2021-11-19T20:10:22Z\",\r\n"
				+ "		\"txnId\": \"\",\r\n"
				+ "		\"time\": \"\",\r\n"
				+ "		\"options\": {}\r\n"
				+ "	},\r\n"
				+ "   \"payload\": {\r\n"
				+ "        \"control\": [\r\n"
				+ "            {\r\n"
				+ "                \"option\": \"ML_MODEL_CODE\",\r\n"
				+ "                \"value\": \"hunter-prime\"\r\n"
				+ "            }\r\n"
				+ "        ],\r\n"
				+ "        \"contacts\": [\r\n"
				+ "            {\r\n"
				+ "                \"telephones\": [\r\n"
				+ "                    {\r\n"
				+ "                        \"type\": \"MOBILE\",\r\n"
				+ "                        \"number\": \"8693891582\",\r\n"
				+ "                        \"id\": \"APPLICANT_1_TEL_1\"\r\n"
				+ "                    }\r\n"
				+ "                ],\r\n"
				+ "                \r\n"
				+ "                \"person\": {\r\n"
				+ "                    \"personDetails\": {\r\n"
				+ "                        \"qualificationType\": \"\",\r\n"
				+ "                        \"maritalStatus\": \"\",\r\n"
				+ "                        \"gender\": \"\",\r\n"
				+ "                        \"age\": 40\r\n"
				+ "                    },\r\n"
				+ "                    \"names\": [\r\n"
				+ "                        {\r\n"
				+ "                            \"firstName\": \"Jithendar\",\r\n"
				+ "                            \"id\": \"APPLICANT_1_NAME_1\",\r\n"
				+ "                            \"initials\": \"B\",\r\n"
				+ "                            \"surName\": \"Bandapalli\",\r\n"
				+ "                            \"title\": \"Ms\",\r\n"
				+ "                            \"type\": \"CURRENT\"\r\n"
				+ "                        }\r\n"
				+ "                    ],\r\n"
				+ "                    \"id\": \"Person_1\"\r\n"
				+ "                },\r\n"
				+ "                \"identityDocuments\": [\r\n"
				+ "                    {\r\n"
				+ "                        \"id\": \"\",\r\n"
				+ "                        \"documentType\": \"PAN CARD\",\r\n"
				+ "                        \"documentNumber\": \"ANFPD4272P\",\r\n"
				+ "                        \"documentDateOfBirth\": \"1979-12-22\",\r\n"
				+ "                        \"documentName\": {\r\n"
				+ "                            \"firstName\": \"Jithendar\",\r\n"
				+ "                            \"surName\": \"Bandapalli\"\r\n"
				+ "                        }\r\n"
				+ "                    }\r\n"
				+ "                ],\r\n"
				+ "                \"id\": \"12345\",\r\n"
				+ "                \"emails\": [\r\n"
				+ "                    {\r\n"
				+ "                        \"type\": \"HOME\",\r\n"
				+ "                        \"id\": \"APPLICANT_1_EMAIL_1\",\r\n"
				+ "                        \"email\": \"bjdattu@yahoo.co.in\"\r\n"
				+ "                    }\r\n"
				+ "                ]\r\n"
				+ "            }\r\n"
				+ "        ],\r\n"
				+ "        \"application\": {\r\n"
				+ "		\"applicants\": [{\r\n"
				+ "                \"applicantType\": \"MAIN_APPLICANT\",\r\n"
				+ "                \"contactId\": \"12345\",\r\n"
				+ "                \"id\": \"APPLICANT_1\"\r\n"
				+ "            }], \r\n"
				+ "            \"productDetails\": {\r\n"
				+ "                \"productType\": \"LOAN\",\r\n"
				+ "                \"productCode\": \"AL_LEA_IND\"\r\n"
				+ "            },\r\n"
				+ "            \"originalRequestTime\": \"2021-11-19T20:10:22Z\",\r\n"
				+ "            \"notificationRequired\": true\r\n"
				+ "        }\r\n"
				+ "    }\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/experian/experian")
		.then()
		.log().all();
		
		
	}
}
