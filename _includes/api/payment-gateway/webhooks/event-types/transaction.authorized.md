<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A <span class="code-green">transaction.authorized</span> event is generated when a transaction has been accepted by
      the Gateway. For Charges{% if user == 'tenant' %} and Credits{% endif %}, this Event
      is generated after successfully authorizing the payment with the payment processing
      network (checking for availability of funds, etc). The corresponding Transaction is
      included in the content of the event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "3mLZet76SrOMg0Gs3QsTbA",
      "created": "2016-10-25T18:08:22.811Z",
      "type": "transaction.authorized",
      "data": {
          "id": "S-EdSnl0RCmPjlCNcc8MSA",
          "created": "2016-10-25T18:08:22.555Z",
          "modified": "2016-10-25T18:08:22.806Z",
          "account_id": "TU0BOD2gEeOfvhLxg70sog",
          "status": "AUTHORIZED",
          "amount": 1312,
          "currency": "USD",
          "authorization_code": "ZBZTGZ",
          "auto_capture": true,
          "amount_refunded": 0,
          "cvv_result": "MATCHED",
          "avs_result": "ADDRESS_AND_POSTAL_CODE",
          "type": "CHARGE",
          "method": {
              "name": "Some Customer",
              "address1": "123 Main St",
              "postal_code": "78730",
              "type": "card",
              "number": "************4242",
              "fingerprint": "GunPelYVthifNV63LEw1",
              "card_type": "VISA",
              "exp_month": 10,
              "exp_year": 2020,
              "cvv": "&#42;&#42;&#42;"
          }
      }
  }</code>
  </pre>
</div>
