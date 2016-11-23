<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
    <p>Any valid HTTP response codes may be returned, but an <b>HTTP 422 (Unprocessable Entity)</b> may be returned if the request was valid but contained <em>invalid</em> data. Here's an example of a 422 response body:</p>
  </div>
</div>

<blockquote>Example response</blockquote>

<pre><code>{
    "messages": [
        {
            "code":"invalid_data",
            "context":"trust_account_number",
            "level":"error",
            "message":"Trust account number is invalid"
        }
    ]
}</code></pre>
</div>
