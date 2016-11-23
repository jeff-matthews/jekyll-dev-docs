<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>If the policy applied to a merchant account requires the provided card address and/or postal code to match, but the payment processor indicates no match was present, the Gateway returns a <span class="code-green">card_avs_rejected</span> and rejects the request.</p>

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
              "code": "card_avs_rejected",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
