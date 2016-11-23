<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway REST APIs return standard HTTP status codes to indicate the success or failure of each operation. Status codes in the 2xx family indicate success, the 4xx family indicates a failure stemming from the data provided in the request, and the 5xx family indicates the Gateway failed to process the request for reasons outside the caller's control.</p>

      <p>API responses that indicate successful completion may contain JSON content in the response body, as defined by the API contract. In the case of an error status, the response body will typically contain JSON content providing details of the problem. Refer to <a href="#gateway-messages-and-errors">Messages and Errors</a> for a detailed list of the types of errors and their contents.</p>

      <table>
        <thead>
          <tr>
            <th>Response Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>The operation succeeded</td>
          </tr>
          <tr>
            <td>204</td>
            <td>The operation succeeded, but no response content was returned (normal for APIs that do not return any JSON response)</td>
          </tr>
          <tr>
            <td>400</td>
            <td>The request was malformed</td>
          </tr>
          <tr>
            <td>401</td>
            <td>Authentication credentials were not provided, or were not valid for the requested operation</td>
          </tr>
          <tr>
            <td>404</td>
            <td>An item referred to in the request, such as a charge or merchant bank account, was not found</td>
          </tr>
          <tr>
            <td>422</td>
            <td>The request could not be processed. This is typically due to validation errors reported in the response.</td>
          </tr>
          <tr>
            <td>500</td>
            <td>An error occurred on the Gateway while processing the request</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
