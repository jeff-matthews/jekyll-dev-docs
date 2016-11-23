<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">card_number_invalid</span> error is returned if a card number is not valid,
      either due to the Luhn checksum of the number's digits not matching, or as a result
      of a payment processor indicating invalid status.</p>
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
              "code": "card_number_invalid",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
