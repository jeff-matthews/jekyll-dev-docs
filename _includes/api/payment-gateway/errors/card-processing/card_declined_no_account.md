<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns a <span class="code-green">card_declined_no_account</span> error if the payment processor
      does not find any account associated with a card number submitted in an authorize or
      charge request.</p>
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
              "code": "card_declined_no_account",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
