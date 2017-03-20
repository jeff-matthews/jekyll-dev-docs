<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/charges/holds</span></p>
      <p>If you create authorization-only charges (charges with <span class="code-green">auto_capture: false</span>), you'll need to issue separate requests to settle those transactions using the <a href="../reference/api.html#capture">Capture</a> API. Use this endpoint to retrieve a list of all unsettled authorization-only charges associated with an authenticated merchant. Authorization-only charges may be returned for a specific merchant account or from all the merchant's accounts.</p>
      <p>The API supports pagination over the result set by allowing the client to specify the number of results per logical "page", the page to view, and filtering. The following optional URL parameters are supported:</p>
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
            <td>The page number to view, starting from 1 <i>(optional, defaults to 1)</i></td>
          </tr>
          <tr>
            <td>page_size</td>
            <td>The number of results to return per logical page <i>(optional, defaults to 20)</i></td>
          </tr>
          <tr>
            <td>account_id</td>
            <td>If specified, only transactions processed through the specified account are returned; if omitted, transactions are returned associated with all of the Merchant's accounts.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="auth-holds"><code class="json">curl -X GET --user secret_key: '{{site.data.variables.apiurl.gateway}}/v1/charges/holds?page=1&page_size=5'</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#auth-holds" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
  "page" : 1,
  "page_size" : 5,
  "total_entries" : 1,
  "results" : [ {
    "id" : "gOUE9tJZQ9C9u-0ax3uEcw",
    "created" : "2017-01-12T20:25:36.032Z",
    "modified" : "2017-01-12T20:25:36.091Z",
    "account_id" : "Z7kmjXdbQdS9Q7dXLZ-mKg",
    "status" : "AUTHORIZED",
    "auto_capture" : false,
    "amount" : 50000,
    "currency" : "USD",
    "authorization_code" : "SFGGMY",
    "amount_refunded" : 0,
    "type" : "CHARGE",
    "method" : {
      "name" : "Dave Bowman",
      "address1" : "123 Main St",
      "city" : "Austin",
      "state" : "TX",
      "postal_code" : "78730",
      "type" : "card",
      "number" : "************4242",
      "fingerprint" : "GunPelYVthifNV63LEw1",
      "card_type" : "VISA",
      "exp_month" : 10,
      "exp_year" : 2017
    },
    "cvv_result" : "MATCHED",
    "avs_result" : "ADDRESS_AND_POSTAL_CODE"
  } ]
}</code>
  </pre>
</div>
