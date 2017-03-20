<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/oauth/token</span></p>

      <p>This endpoint returns an <span class="code-green">access_token</span> when you POST a valid <span class="code-green">grant_type</span> parameter.</p>

      <p>You can access merchant account details after you receive an access token. You must use your AffiniPay OAuth Partner Application client ID and secret to make this call.</p>

      <p><span class="panel-note-api"><b>Note:</b> Before you can call the {{site.data.variables.brand.gateway-api}} and manage transactions on a merchant's behalf, your application must use the access token to request <a href="../guides/app-dev-getting-started.html#request-gateway-credentials">gateway credentials</a>.</span></p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>client_id</td>
            <td>A unique 64-character, alphanumeric string used to identify your AffiniPay Partner Application in OAuth 2.0 web flows.</td>
          </tr>
          <tr>
            <td>client_secret</td>
            <td>A unique 64-character, alphanumeric string used to authenticate your AffiniPay Partner Application in OAuth 2.0 web flows.</td>
          </tr>
          <tr>
            <td>grant_type</td>
            <td>Specifies which grant type to use in the OAuth 2.0 web flow. Set this to <span class="code-green">authorization_code</span>.</td>
          </tr>
          <tr>
            <td>scope</td>
            <td>Determines the level of access your application has to the merchant's account. Set this to <span class="code-green">chargeio</span>.</td>
          </tr>
          <tr>
            <td>redirect_uri</td>
            <td>Per the OAuth 2.0 specification, this is the URI to which the AffiniPay web application will redirect after successful authorization. Your web server must handle redirects to this URI according to the OAuth 2.0 specification.</td>
          </tr>
          <tr>
            <td>code</td>
            <td>The <span class="code-green">authorization_code</span> that the Authentication API sends to the redirect URI you specified in your <a href="../guides/app-dev-getting-started.html#configure-your-partner-application">AffiniPay OAuth Partner Application</a> after a user logs in and authorizes your application.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

<blockquote>Example request</blockquote>

<pre id="access-token"><code class="json">curl -X POST -H "Content-Type:application/json" https://secure.affinipay.com/oauth/token -d '
{
  "client_id":"Y4QLWPO6wZag2ia8Abw7nbeLUAOgebDlfZGF1KyzgBaqAllzMtYFfP58jRxg5rp5",
  "client_secret":"4EG357enIs4m2SWKi9yfC3fQzIeOZmBTWr96ay47tqN4GUtRPYrWwxwCxwlZJbiC",
  "grant_type":"authorization_code",
  "scope":"chargeio",
  "redirect_uri":"http://localhost:9292/callback",
  "code":"EiKvFkJu6rcFwOMWSqW8bWIng6EMFVD93duwn1QhgQKDvmpbA97zWFN2AfC5052R"
}'</code></pre>
<blockquote><button id="btn" class="btn copy" data-clipboard-target="#access-token" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

<blockquote>Example response</blockquote>
<pre><code>{
  "access_token":"Msp2VL7SEGbLxT8UBWww7WUy33hLsg5Yhf5fFu8znSpPh2BbBMvXPyQkZx5TtWHd",
  "token_type":"bearer",
  "scope":"chargeio",
  "created_at":1464986958
}</code></pre>
</div>
