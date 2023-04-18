import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
    vus: 20,
    duration: '1s',
  };


export default function () {

    const url = 'https://reqres.in/api/users';
    const payload =  JSON.stringify({
        name : 'bagavathi',
        job : 'tester'
    })

    const res = http.post(url,payload);
    check(res,{
        'is status is 200 ': (r) => r.status ===200, 
    });
  }