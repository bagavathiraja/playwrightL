package posidex;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import com.github.javafaker.Faker;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;


public class FindCustomer {
	
	public static Faker faker = new Faker();

	public static void main(String[] args) {

		RestAssured.baseURI = "https://esbuat.mmfsl.com/mahindrafinance/uat/";
		
		
		String HexId = faker.regexify("[0-9]{30}");
        String RequestId = faker.regexify("[0-9A-Z]{24}");
        
       	given().header("x-ibm-client-id","c3543dc4-7b1b-4336-801d-c4e09edd78cd").header("Content-Type","application/json") .body("{\r\n"
	            + "    \"Master\": {\r\n"
	            + "        \"Bank_Account_Number\": \"\",\r\n"
	            + "        \"Company_Code\": \"MMFSL\",\r\n"
	            + "        \"Date_Of_Birth\": \"2003-02-11\",\r\n"
	            + "        \"Driving_Licence\": \"\",\r\n"
	            + "        \"Entity_Code\": \"5800381501\",\r\n"
	            + "        \"Entity_Name\": \"MR. RAMESH K\",\r\n"
	            + "        \"Entity_Type\": \"GUARANTOR\",\r\n"
	            + "        \"Father_Name\": \"MAHESH M\",\r\n"
	            + "        \"Favouring_Name\": \"\",\r\n"
	            + "        \"Hexadecimal_RequestId\": \"" + HexId + "\",\r\n"
	            + "        \"Module_Code\": \"SLATE\",\r\n"
	            + "        \"Other_Identity\": \"\",\r\n"
	            + "        \"Other_Identity_No\": \"\",\r\n"
	            + "        \"Pan\": \"CAIPN9994C\",\r\n"
	            + "        \"Passport\": \"\",\r\n"
	            + "        \"Profile_Id\": \"1\",\r\n"
	            + "        \"Ration_Card\": \"\",\r\n"
	            + "        \"Request_Id\": \"" + RequestId + "\",\r\n"
	            + "        \"Unique_Id\": \"\",\r\n"
	            + "        \"Voter_Id\": \"\",\r\n"
	            + "        \"Source_System_Name\": \"admin\",\r\n"
	            + "        \"Source_Authentication_Token\": \"posidex\",\r\n"
	            + "        \"Customer_Type\": \"Individual\",\r\n"
	            + "        \"Mother_Name\": \"\",\r\n"
	            + "        \"Spouse_Name\": null,\r\n"
	            + "        \"Employer_Name\": null,\r\n"
	            + "        \"Gender\": \"1\",\r\n"
	            + "        \"Doi\": \"\",\r\n"
	            + "        \"GSTIN\": \"\",\r\n"
	            + "        \"TAN_No\": \"\",\r\n"
	            + "        \"DIN_No\": \"\",\r\n"
	            + "        \"CYKC_No\": \"4006840089092\",\r\n"
	            + "        \"IFSC_Code\": \"\"\r\n"
	            + "    },\r\n"
	            + "    \"Details\": [\r\n"
	            + "        {\r\n"
	            + "            \"Address_Type\": \"COMMUNICATION ADDRESS\",\r\n"
	            + "            \"City_Village_Town\": \"REDDIGUDEM\",\r\n"
	            + "            \"District\": \"KRISHNA DIST\",\r\n"
	            + "            \"Email\": \"\",\r\n"
	            + "            \"Land_Mark\": \"\",\r\n"
	            + "            \"Mobile_No\": \"8797998998\",\r\n"
	            + "            \"Office_Phone_Number\": \"\",\r\n"
	            + "            \"Pin_Code\": \"521215\",\r\n"
	            + "            \"Post_Office\": \"REDDIGUDEM BRANCH POST OFFICE\",\r\n"
	            + "            \"Premises\": \"PRE\",\r\n"
	            + "            \"Residence_Phone_Number\": \"\",\r\n"
	            + "            \"Road_Name\": \"\",\r\n"
	            + "            \"State\": \"ANDHRA PRADESH\",\r\n"
	            + "            \"Taluk\": \"REDDIGUDEM TLK\",\r\n"
	            + "            \"Phone_Type\": null,\r\n"
	            + "            \"Phone\": null,\r\n"
	            + "            \"Email_Type\": null\r\n"
	            + "        }\r\n"
	            + "    ]\r\n"
	            + "}")
		.when()
		.post("/posidex_dedupe/findcustomer_v3")
		.then()
		.log().all();
		   
	}
}
