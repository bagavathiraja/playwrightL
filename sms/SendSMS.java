package sms;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class SendSMS {

	public static void main(String[] args) {

		given().header("x-ibm-client-id","cf79d201-ecca-4f16-b748-167d401e1c1f").header("Content-Type","application/json")
		.body("{\r\n"
				+ "    \"Mobile_Number\":\"7010853652\",\r\n"
				+ "    \"SMS_Text\":\"HELLO.\",\r\n"
				+ "    \"Template_ID\":\"5\",\r\n"
				+ "    \"Sender_ID\":\"55555\"\r\n"
				+ "}\r\n"
				+ "")
		.when()
		.post("https://esbuat.mmfsl.com/mahindrafinance/uat/crm/smsapi/sms")
		.then()
		.log().all()
		.assertThat().statusCode(200)
		.body("httpMessage", equalTo("Success")); 
	}
}
