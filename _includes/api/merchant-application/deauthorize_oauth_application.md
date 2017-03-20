<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">DELETE</span> <span class="code-green">/merchants/{merchant_public_key}/deauthorize_application</span></p>

      <p>Revoke authorization to use an OAuth Partner Application from the specified AffiniPay merchant account. This call requires you to obtain an access token using the <a href="../basics/authentication.html#client-credentials" target="&#95;blank">Client Credentials</a> OAuth flow.</p>
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
            <td>A unique 24-character, alphanumeric string used to identify AffiniPay merchant accounts.</td>
          </tr>
          <tr>
            <td>access_token</td>
            <td>A unique 64-character, alphanumeric string used to identify an AffiniPay Partner Application in OAuth 2.0 web flows.</td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>

<blockquote>Example request</blockquote>
<pre id="deauthorize-app"><code class="json">curl -X DELETE -H "Authorization: Bearer &lt;access_token>" https://secure.affinipay.com/api/v1/merchants/{public_key}/deauthorize_application</code></pre>

<blockquote><button id="btn" class="btn copy api" data-clipboard-target="#deauthorize-app" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

<blockquote>Example response</blockquote>
<pre><code class="html">Returns an HTTP 200 OK status code and an empty response body
when successful.</code></pre>
</div>
