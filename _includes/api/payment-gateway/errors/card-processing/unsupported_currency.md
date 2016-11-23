<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>If a merchant account cannot accept the currency designated by the currency code given on an authorize or charge request, the Gateway returns a <span class="code-green">unsupported_currency</span> error code and rejects the request.</p>
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
              "code": "unsupported_currency",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
