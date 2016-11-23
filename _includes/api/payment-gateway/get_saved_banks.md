<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/banks</span></p>

      <p>The list of <a href="#bank" style="font-family:monospace">banks</a> saved for a merchant are retrieved via a GET request
      to <span class="code-green">/v1/banks</span>. The API supports pagination over the result set by allowing the client to
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
            <td>Returns only Banks having the given reference value <em>(optional)</em></td>
          </tr>
        </tbody>
      </table>

      <p>The second example makes use of the <span class="code-green">reference</span> property on saved Banks to support retrieving
      Banks for a specific customer having the ID <span class="code-green">Customer123</span> within the integrating merchant system.</p>
    </div>
  </div>

  <blockquote>Retrieve the third page of saved banks, with four items per page</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/banks?page=3&amp;page_size=4</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 3,
      "page_size":4,
      "total_entries": 61,
      "results": [
          {
              "id": "vU42KZWhTd2iiGLhjfJR6A",
              "type": "bank",
              "description": "Corporate Checking",
              "reference": "Customer123",
              "name": "Some Customer",
              "routing_number": "******013",
              "account_number": "**********2394",
              "account_type": "CHECKING",
              "fingerprint": "j_RBZuzITtssQF8dhRvs",
              "bank_name": "FIRST BANK OF TESTING"
          }, {
              "id": "TAvupZVpR4m7zO8L-tcDRQ",
              ...
          }, {
              "id": "	&#95;jvTVhl5T_m57XC-H2f9rA",
              ...
          }, {
              "id": "VrjnCzB8QL6MFH-2OVLjFA",
              "type": "bank",
              "routing_number": "******000",
              "account_number": "*********3847",
              "account_type": "SAVINGS",
              "fingerprint": "VYPocmxwclCWM4vcdLcW",
              "bank_name": "TEST FEDERAL CREDIT UNION"
          }
      ]
  }</code>
  </pre>

  <blockquote>Retrieve saved banks for a specific customer</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/banks?reference=Customer123</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 20,
      "total_entries": 1,
      "results": [
          {
              "id": "vU42KZWhTd2iiGLhjfJR6A",
              "type": "bank",
              "description": "Corporate Checking",
              "reference": "Customer123",
              "name": "Some Customer",
              "routing_number": "******013",
              "account_number": "**********2394",
              "account_type": "CHECKING",
              "fingerprint": "j_RBZuzITtssQF8dhRvs",
              "bank_name": "FIRST BANK OF TESTING"
          }
      ]
  }</code>
  </pre>
</div>
