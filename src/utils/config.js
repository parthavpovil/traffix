// utils/config.js
import axios from 'axios';

const pinataApiKey = 'd01703822842ebc6321b';
const pinataSecretApiKey = '459893d4204286f65e6e981e2fe51b59dab0baef21569cf52f58d57eeafe27f6';
const pinataJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YTA4M2IwYi0xODQyLTRjZDEtOWM3OC02MjFhODkzMDNhNmEiLCJlbWFpbCI6InBhcnRoYXZwb3ZpbDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQwMTcwMzgyMjg0MmViYzYzMjFiIiwic2NvcGVkS2V5U2VjcmV0IjoiNDU5ODkzZDQyMDQyODZmNjVlNmU5ODFlMmZlNTFiNTlkYWIwYmFlZjIxNTY5Y2Y1MmY1OGQ1N2VlYWZlMjdmNiIsImV4cCI6MTc1ODE4OTA0M30.JTTPM7CDDS_9gWFTseap8FxhnYHynlreZ2UERd1PVh4'; // Replace with your JWT
const pinataGateway = 'https://aquamarine-immediate-crow-57.mypinata.cloud';

const pinata = axios.create({
  baseURL: 'https://api.pinata.cloud',
  headers: {
    'Authorization': `Bearer ${pinataJwt}`,
    'Content-Type': 'application/json'
  }
});

export { pinata, pinataGateway, pinataJwt }; // Ensure pinataJwt is exported here