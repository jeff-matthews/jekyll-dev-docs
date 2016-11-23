<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The API generates this event after AffiniPay completes the underwriting process, approves the merchant application, and provisions the applicant's new merchant account. Data includes an <span class="code-green">authorization_code</span>, which you'll need in order to request an <span class="code-green">access_token</span> to gain authorized access to the merchant's account.</p>
    </div>
  </div>

<blockquote>Example</blockquote>
<pre><code class="json">{
  "events": [{
      "type":"merchant.provisioned",
      "data": {
          "auth_code":"&lt;authorization_code>",
          "reference":"&lt;reference>"
      }
  }]
}</code></pre>
</div>
