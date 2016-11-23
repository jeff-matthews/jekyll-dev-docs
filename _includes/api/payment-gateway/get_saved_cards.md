<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/cards</span></p>

      <p>The list of <a href="#card" style="font-family:monospace">cards</a> saved for a merchant are retrieved via a GET request
      to <span class="code-green">/v1/cards</span>. The API supports pagination over the result set by allowing the client to
      specify the number of results per logical "page" and the page to view. The following URL
      parameters are supported:</p>

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
            <td>reference</td>
            <td>Returns only Cards having the given reference value <em>(optional)</em></td>
          </tr>
          <tr>
            <td>exp_month</td>
            <td>Returns Cards for which the expiration month matches the given value <em>(optional)</em></td>
          </tr>
          <tr>
            <td>exp_year</td>
            <td>Returns Cards for which the expiration year matches the given value <em>(optional)</em></td>
          </tr>
        </tbody>
      </table>

      The second example makes use of the <span class="code-green">reference</span> property on saved cards to support retrieving
      cards for a specific customer having the ID <span class="code-green">Customer123</span> within the integrating merchant system.

      A merchant can query the Gateway to find which customers' saved cards are expiring in a given month and year in order to support collection of updated payment information. The <span class="code-green">exp_month</span> and <span class="code-green">exp_year</span> query parameters are specified with the desired expiration month and year.
    </div>
  </div>

  <blockquote>Retrieve the first page of saved cards</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards?page=1&amp;page_size=5</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 5,
      "total_entries": 24,
      "results": [
          {
              "id": "JimubYg3TXyYpETqP2c_rg",
              "type": "card",
              "description": "A description for this card",
              "reference": "Customer123",
              "name": "Sample Customer",
              "address1": "123 Main St",
              "postal_code": "78730",
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020
          }, {
              "id": "narZ3f_9TQGcjm4ZMAAI5g",
              ...
          }, {
              "id": "aXfXI1j9Tm-zG5u4WrgNRw",
              ....
          }, {
              "id": "13ZQq2qGQHuJ2fm7qXtvoQ",
              ...
          }, {
              "id": "AjaY-FpwQY2ISxSwE04Z4g",
              "type": "card",
              "number": "************8356",
              "fingerprint": "AAV45s0hY9wezAf4tuo6",
              "card_type": "VISA",
              "exp_month": 3,
              "exp_year": 2017
          }
      ]
  }</code>
  </pre>

  <blockquote>Retrieve saved cards for a specific customer</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards?reference=Customer123</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 20,
      "total_entries": 1,
      "results": [
          {
              "id": "JimubYg3TXyYpETqP2c_rg",
              "type": "card",
              "description": "A description for this card",
              "reference": "Customer123",
              "name": "Sample Customer",
              "address1": "123 Main St",
              "postal_code": "78730",
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020
          }
      ]
  }</code>
  </pre>

  <blockquote>Retrieve saved cards by expiration</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/cards?exp_month=3&amp;exp_year=2017</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 20,
      "total_entries": 1,
      "results": [
          {
              "id": "AjaY-FpwQY2ISxSwE04Z4g",
              "type": "card",
              "number": "************8356",
              "fingerprint": "AAV45s0hY9wezAf4tuo6",
              "card_type": "VISA",
              "exp_month": 3,
              "exp_year": 2017
          }
      ]
  }</code>
  </pre>
</div>
