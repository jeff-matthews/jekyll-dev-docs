<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/recurring/charges/{id}/occurrences</span></p>

      <p>The list of <a href="#recurringchargeoccurrence" style="font-family:monospace">recurring_charge_occurrences</a> for a recurring charge, including status information
      and associated transactions, is obtained by sending a GET request to <span class="code-green">/v1/recurring/charges/{id}/occurrences</span>, substituting the recurring charge ID for <span class="code-green">id</span>. The Gateway responds with a <a href="#searchresults" style="font-family:monospace">search_results</a> instance containing the occurrences.</p>

      <p><span class="panel-note"><b>Note:</b> Occurrences are returned in descending order of their creation such that the next pending due occurrence (or the last occurrence in a completed schedule) is first.</span></p>

      <p>The API supports pagination over the result set by allowing the client to specify the number of results per logical "page" and the page to view. The following URL parameters are supported:</p>

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
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/xicilh0vTAeZiThRtHU2Ow/occurrences</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 20,
      "total_entries": 3,
      "results" : [ {
          "id": "D_NjpMyqSMiqufQxEYQ0lA",
          "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
          "amount": 1250,
          "status": "PENDING",
          "due_date": "2016-03-01",
          "attempts": 0
      }, {
          "id": "Vj91nLgbSg61pzHqYb06VQ",
          "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
          "amount": 1250,
          "status": "IGNORED",
          "due_date": "2016-02-01",
          "attempts": 0
      }, {
          "id": "&#95;LIG1tsDQZ21oBgPYTRJdQ",
          "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
          "amount": 1250,
          "status": "PAID",
          "due_date": "2016-01-01",
          "attempts": 1,
          "last_attempt": "2014-06-27T19:23:49.422Z",
          "transactions": [ {
              "id": "UvGF3iMEQwObZN0hxikByg",
              "type": "CHARGE"
              "account_id": "&#95;gpv9uWxEeOajNb7ZxMrnA",
              "status": "AUTHORIZED",
              "auto_capture": true,
              "amount": 1250,
              "currency": "USD",
              "method": {
                  "type": "card"
                  "number": "************4242",
                  "fingerprint": "GunPelYVthifNV63LEw1",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2020,
                  "name": "Test Customer"
              },
              "amount_refunded": 0,
              "authorization_code": "R9IFPH",
              "recurring_charge_id": "xicilh0vTAeZiThRtHU2Ow",
              "recurring_charge_occurrence_id": "&#95;LIG1tsDQZ21oBgPYTRJdQ"
          } ]
      } ]
  }</code>
  </pre>
</div>
