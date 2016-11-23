<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If neither bank details nor a valid payment token are provided on an ACH transfer
      request, the Gateway returns a <span class="code-green">no_bank_details_or_token_present</span>
      error and rejects the request.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "no_bank_details_or_token_present",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }
  </code></pre>
</div>
