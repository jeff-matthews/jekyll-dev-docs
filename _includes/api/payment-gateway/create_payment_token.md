<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/tokens</span></p>

      <p>A merchant system, having collected a customer's payment details, may exchange them for a one-time payment token by POSTing the payment details to <span class="code-green">/v1/tokens</span>. {{site.data.notes.token-ttl}}</p>

      <p>The Gateway responds with a JSON <a href="#token" style="font-family:monospace">token</a> containing the payment details (with the card number, routing number, and bank account number masked, and without the given CVV, if any), the key <span class="code-green">id</span> holding the token identifier to be sent in a future transaction, and any additional data included in the POST. The Gateway accepts payment details as either form URL-encoded data or a JSON structure, based on the HTTP Content-Type header provided (<span class="code-green">application/x-www-form-urlencoded</span> or <span class="code-green">application/json</span>, respectively).</p>

      <p>The following table summarizes the supported payment detail properties, provided either as form parameters or JSON
      keys. When using form URL-encoded data, the values should be sent encoded in the form POST body, not included as query
      parameters in the URL.</p>

      <p><span class="panel-note"><b>Note:</b> This endpoint only requires the merchant public key for authentication in order
      to support generating tokens directly from merchant web pages. You should never use your secret keys in any location,
      such as a web page, that might be accessible without proper authorization and access controls.</span></p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>public_key</td>
            <td>The merchant public key can be specified as a form POST parameter, rather than using the
            HTTP basic authorization header, to support generation of tokens from form POSTs without
            JavaScript.</td>
          </tr>
          <tr>
            <td>redirect_url</td>
            <td>For payment form flows using HTTP redirects (as opposed to JavaScript) with form URL-encoded data, specifying a <span class="code-green">redirect_url</span> will cause the Gateway to return an HTTP 303 redirecting to the location specified, along with the generated token ID as a query parameter (<span class="code-green">token_id</span>). The location is usually the merchant system URL that processes a payment request. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>type</td>
            <td>The type or payment token being created. Enumeration of:
              <ul>
                <li>bank</li>
                <li>card</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>number</td>
            <td>The credit card number <em>(optional)</em></td>
          </tr>
          <tr>
            <td>card_type</td>
            <td>Type of the credit card <em>(optional)</em>. Enumeration of:
              <ul>
                <li>MASTERCARD</li>
                <li>VISA</li>
                <li>AMERICAN_EXPRESS</li>
                <li>DISCOVER</li>
                <li>DINERS_CLUB</li>
                <li>JCB</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>exp_month</td>
            <td>Card expiration month, 1-12 <em>(optional)</em></td>
          </tr>
          <tr>
            <td>exp_year</td>
            <td>2 or 4-digit card expiration year <em>(optional)</em></td>
          </tr>
          <tr>
            <td>cvv</td>
            <td>Card CVV <em>(optional)</em></td>
          </tr>
          <tr>
            <td>routing_number</td>
            <td>9-digit routing number of the customer's bank <em>(optional)</em></td>
          </tr>
          <tr>
            <td>account_number</td>
            <td>Customer's bank account number. The value may be 4-17 digits, with no punctuation or other characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>account_type</td>
            <td>The type of the customer bank account specified, either checking or savings <em>(optional)</em>. Enumeration of:
              <ul>
                <li>CHECKING</li>
                <li>SAVINGS</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>Card holder name <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address1</td>
            <td>Card holder address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address2</td>
            <td>Additional card holder address line <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td>
            <td>Card holder city <em>(optional)</em></td>
          </tr>
          <tr>
            <td>state</td>
            <td>Card holder state <em>(optional)</em></td>
          </tr>
          <tr>
            <td>postal_code</td>
            <td>Billing zip or postal code, consisting of 3 to 9 alphanumeric characters,
            spaces, and dashes. The total length of the postal code cannot exceed 10 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>country</td>
            <td>Card holder 2-letter ISO country code <em>(optional)</em></td>
          </tr>
          <tr>
            <td>email</td>
            <td>Card holder email address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>phone</td>
            <td>Card holder phone number. No specific format is required, but the total length cannot exceed 22 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>reference</td>
            <td>An external reference for the payment details, such as a customer ID <em>(optional)</em></td>
          </tr>
          <tr>
            <td>description</td>
            <td>Description for the payment details <em>(optional)</em></td>
          </tr>
          <tr>
            <td>form_data</td>
            <td>Additional data to be stored on the token. When using JSON encoding, the value accepts any valid JSON
              value or object; when using form URL-encoding, any parameters not defined in this table are automatically
              stored as additional data.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Create a credit card one-time token using form URL-encoding</blockquote>

  <pre id="post-token"><code class="json">curl -X POST -H "Content-Type:application/x-www-form-urlencoded" --user public_key: {{site.data.variables.apiurl.gateway}}/v1/tokens -d 'type=card&amp;number=4242424242424242&amp;exp_month=10&amp;exp_year=2017&amp;cvv=123&amp;extra_data=some_value&amp;extra_data=second_value&amp;more_data=another_value'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#post-token" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFaj72F3aBPvZneEsBew",
      "type": "card",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "exp_month": 10,
      "exp_year": 2017,
      "cvv": "&#42;&#42;&#42;",
      "form_data": {
          "extra_data": [ "some_value", "second_value" ],
          "more_data": "another_value"
      }
  }</code>
  </pre>

  <blockquote>Create a credit card one-time token using JSON encoding</blockquote>

  <pre id="token-json"><code class="json">curl -X POST -H "Content-Type:application/json" --user public_key: {{site.data.variables.apiurl.gateway}}/v1/tokens -d '
  {
    "type": "card",
    "number": "4242424242424242",
    "exp_month": 10,
    "exp_year": 2017,
    "cvv": "123",
    "form_data": {
        "extra_data": "some_value",
        "more_data": "another_value"
    }
}'</code></pre>
<blockquote><button id="btn" class="btn copy" data-clipboard-target="#token-json" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFaj72F3aBPvZneEsBew",
      "type": "card",
      "number": "************4242",
      "fingerprint": "GunPelYVthifNV63LEw1",
      "exp_month": 10,
      "exp_year": 2017,
      "cvv": "&#42;&#42;&#42;",
      "form_data": {
          "extra_data": [ "some_value", "second_value" ],
          "more_data": "another_value"
      }
  }</code>
  </pre>

  <blockquote>Create a bank one-time token specifying a redirect URL</blockquote>

  <pre id="token-bank"><code class="json">curl -X POST -H "Content-Type:application/x-www-form-urlencoded" --user public_key: {{site.data.variables.apiurl.gateway}}/v1/tokens -d 'type=bank&amp;routing_number=000000013&amp;account_number=1234567890&amp;account_type=CHECKING&amp;redirect_url=https://merchant.example.com/payment'</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#token-bank" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code class="html">HTTP/1.1 303 See Other Location: https://merchant.example.com/payment?token_id=wKgFaj72F3aBPvZ9KuIBfAContent-Length: 0</code>
  </pre>
</div>
