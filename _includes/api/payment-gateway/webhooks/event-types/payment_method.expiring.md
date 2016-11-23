<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Saved customer payment methods that contain expiration dates, such as <a href="#card" style="font-family:monospace">card</a>, generate
      <span class="code-green">payment_method.expiring</span> events prior to expiration. For cards, the expiring event is sent on the first day of the month in which the card expires. The payment method is included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "1VDRNOPLT82SO1BTnZqzRw",
      "created": "2013-12-01T03:00:01.127Z",
      "type": "payment_method.expiring",
      "data": {
          "id": "	&#95;2xcfBTLTlS_zonNe4j8CA",
          "created": "2013-12-03T02:43:49.127Z",
          "modified": "2013-12-03T02:43:49.127Z",
          "type": "card",
          "name": "Some Customer",
          "number": "&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;4242",
          "card_type": "VISA",
          "exp_month": 12,
          "exp_year": 2013,
      }
  }</code>
  </pre>
</div>
