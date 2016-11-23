<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">card_number_incorrect</span> error is returned if the caller provides both
      a card number and card type (<span class="code-green">VISA</span>, <span class="code-green">MASTERCARD</span>, etc), but
      the card number is not valid for the specified type.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>

  <blockquote>Example</blockquote>
  <pre><code class="json">{
      "messages": [
          {
              "code": "card_number_incorrect",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
