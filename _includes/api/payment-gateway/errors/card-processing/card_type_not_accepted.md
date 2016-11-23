<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>The Gateway returns a <span class="code-green">card_type_not_accepted</span> error if an unsupported card type (<span class="code-green">VISA</span>, <span class="code-green">MASTERCARD</span>, etc) is used in a charge or credit operation. The supported card types are based on the merchant account configuration with the issuing bank.</p>

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
            "code": "card_type_not_accepted",
            "level": "error",
            "facility": "payment_processor"
        }
    ]
 }</code>
 </pre>
</div>
