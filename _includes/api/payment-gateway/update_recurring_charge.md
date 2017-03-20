<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">PUT|PATCH</span> <span class="code-green">/v1/recurring/charges/{id}</span></p>

      <p>A recurring charge may be updated by sending a PUT or PATCH request to <span class="code-green">/v1/recurring/charges/{id}</span>, substituting <span class="code-green">id</span>
      for the ID of the recurring charge. A PUT request requires the complete contents of the recurring charge to be sent in
      the JSON request, whereas PATCH requests can send just the JSON elements that should be changed. The choice of PUT vs
      PATCH depends on the manner of integration. However, for PCI compliance reasons, unless saved payment methods are used
      to provide the payment details, a PATCH request should be used since it allows the recurring charge to be modified
      without needed to re-collect payment information. The updated recurring charge is returned in the response content.</p>

      <p><span class="panel-note">When a PATCH is performed that includes the <span class="code-green">method</span>
      JSON hash (to update individual payment details), the <span class="code-green">type</span> attribute of <span class="code-green">method</span> must be
      specified. Refer to the example PATCH request to the right.</span></p>
    </div>
  </div>

  <blockquote>Update a recurring charge amount via PUT using a saved card</blockquote>

  <pre id="put-recur"><code class="json">curl -X PUT -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/be0t6cgpSyGYz6cxCmAB1A -d '
  {
      "amount": "5000",
      "method": "m_bla2RHSUioRDb29imFmA",
      "schedule": {
          "start": "2016-07-01",
          "interval_unit": "MONTH",
          "interval_delay": 1
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#put-recur" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "be0t6cgpSyGYz6cxCmAB1A",
      "status": "ACTIVE",
      "account_id": "XLu8EABYEeS91ehmSDUzYg",
      "method": {
          "type": "card"
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 10,
          "exp_year": 2020
      },
      "schedule": {
          "interval_unit": "MONTH",
          "interval_delay": 1,
          "start": "2016-07-01"
      },
      "amount": 5000,
      "currency": "USD",
      "total_occurrences": 0,
      "total_amount": 0,
      "next_payment": "2016-07-01"
  }</code>
  </pre>


  <blockquote>Update the payment method expiration date of a recurring charge via PATCH</blockquote>

  <pre id="recur-method"><code class="json">curl -X PATCH -H "Content-Type:application/json" --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/be0t6cgpSyGYz6cxCmAB1A -d '
  {
      "method": {
          "type": "card",
          "exp_month": 7,
          "exp_year": 2022
      }
  }'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#recur-method" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "be0t6cgpSyGYz6cxCmAB1A",
      "status": "ACTIVE",
      "account_id": "XLu8EABYEeS91ehmSDUzYg",
      "method": {
          "type": "card"
          "number": "************4242",
          "fingerprint": "GunPelYVthifNV63LEw1",
          "card_type": "VISA",
          "exp_month": 7,
          "exp_year": 2022
      },
      "schedule": {
          "interval_unit": "MONTH",
          "interval_delay": 1,
          "start": "2016-07-01"
      },
      "amount": 5000,
      "currency": "USD",
      "total_occurrences": 0,
      "total_amount": 0,
      "next_payment": "2016-07-01"
  }</code>
  </pre>
</div>
