<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/recurring/charges</span></p>

      <p>The list of <a href="#recurring_charge" style="font-family:monospace">recurring_charges</a> for a Merchant are retrieved via a GET request to <span class="code-green">/v1/recurring/charges</span>.</p>

      <p>{{site.data.notes.note.pagination}}</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>The page number to view, starting from 1 <em>(optional, defaults to 1)</em></td>
          </tr>
          <tr>
            <td>page_size</td>
            <td>The number of results to return per logical page <em>(optional, defaults to 20)</em></td>
          </tr>
          <tr>
            <td>account_id</td>
            <td>If specified, only recurring charges processed through the specified account are returned;
                if omitted, recurring charges are returned associated with all of the Merchant's accounts.
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>The status recurring charges must match to be returned in the results. If not specified, recurring charges
                of all statuses are returned. Refer to the <a href="#recurring_charge" style="font-family:monospace">recurring_charge</a> type definition for a list of valid status codes.
            </td>
          </tr>
          <tr>
            <td>reference</td>
            <td>If specified, only recurring charges having a matching reference are returned.</td>
          </tr>
          <tr>
            <td>order_by</td>
            <td>A comma-separated list of properties used to sort the results. By default, the results are
                sorted in ascending order by the property. Each property may optionally be preceded by a '-' or '+' character
                to specify descending or ascending sort order. If no value is specified, the Gateway will return
                recurring charges in order of descending creation timestamp.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Retrieve the 5 most recent recurring charges:</blockquote>

  <pre id="recent-recur"><code class="json">curl -X GET --user secret_key: '{{site.data.variables.apiurl.gateway}}/v1/recurring/charges?page=1&amp;page_size=5&amp;order_by=-created'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#recent-recur" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code class="json">{
      "page": 1,
      "page_size": 5,
      "total_entries": 22,
      "results": [
          {
              "id": "xicilh0vTAeZiThRtHU2Ow",
              "created": "2016-06-27T12:11:14.102Z",
              "status": "COMPLETED",
              "status_reason": "user_canceled",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "GunPelYVthifNV63LEw1",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2020,
                  "name": "Test Customer"
              },
              "schedule": {
                  "interval_unit": "MONTH",
                  "interval_delay": 1,
                  "start": "2016-01-01"
              },
              "description": "Monthly recurring charge",
              "amount" : 1250,
              "currency": "USD",
              "total_occurrences": 0,
              "total_amount": 0,
              "next_payment": "2016-04-01"
          }, {
              "id": "I2h-9d8aSp-7DN-5IM9aOw",
              "created": "2016-06-27T11:35:06.823",
              "status": "ACTIVE",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              ...
          }, {
              "id": "3DazwIsiRsan5oVqNv1LBQ",
              "created": "2016-06-24T18:10:33.652",
              "status": "ACTIVE",
              "account_id": "XLu8EABYEeS91ehmSDUzYg",
              ...
          }, {
              "id": "PpQu1BWpTG6ancC2HUZWwQ",
              "created": "2016-06-18T14:51:27.039",
              "status": "ACTIVE",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              ...
          }, {
              "id": "aoeO8fBvT3KYeVYCDIrZUw",
              "created": "2016-06-16T10:41:29.520",
              "status": "COMPLETED",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              ...
          }
      ]
  }</code>
  </pre>
</div>
