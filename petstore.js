import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';



export const options = {

    ext: {
        loadimpact: {
          projectID: 3637468,
           name: "PetStore"
        }
      },
   
   // thresholds: {
        //http_req_duration: ['p(95)<500'], 
    //  },
      stages: [
       { target: 10, duration: '10s' },       
       { target: 15, duration: '10s' },       
       { target: 5, duration: '10s' },
       { target: 20, duration: '10s' }

      ]

  };

export default function () {

    const url = 'https://petstore.swagger.io/v2/store/order';

   const payload =  JSON.stringify(
        {
           "id": 555,
            "petId": 777,
            "quantity": 1,
           "shipDate": "2023-04-20T11:57:40.944Z",
           "status": "placed",
           "complete": true
          }
  );
    const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };


    const res = http.post(url,payload,params);
    check(res,{
        'is status is 200 ': (r) => r.status ===200, 
        
    });
    
  } //to run on cloud = k6 run -o cloud petstore.js

 
  
  
