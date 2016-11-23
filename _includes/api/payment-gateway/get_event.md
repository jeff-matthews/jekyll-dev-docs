<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/events/{eventId}</span></p>

      <p>The content of an individual <a href="#event" style="font-family:monospace">event</a> is retrieved by performing
      a GET to <span class="code-green">/v1/events/{eventId}</span> where <span class="code-green">eventId</span> is the ID of the event. The Gateway returns a JSON event element identifying the type of event, when it was created,
      and the event data.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/events/gUoRi3NSTvGNjmNTip6pCw</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id" : "DYEDsGU_RgWjwnY5cTPMew",
      "created" : "2013-10-25T17:41:41.959Z",
      "type" : "transaction.authorized",
      "data" : {
        "id" : "m7wPNJgUT4uHNRoSdUpTnA",
        "created" : "2013-10-25T17:41:41.938Z",
        "modified" : "2013-10-25T17:41:41.938Z",
        "account_id" : "8IO47jzCEeOfvhLxg70sog",
        "status" : "AUTHORIZED",
        "amount" : 100,
        "currency" : "USD",
        "auto_capture" : true,
        "amount_refunded" : 0,
        "authorization_code": "H3PKFH",
        "type" : "CHARGE",
        "method" : {
          "name" : "Some Customer",
          "address1" : "123 Main",
          "postal_code" : "78730",
          "type" : "card",
          "number" : "************4242",
          "fingerprint" : "GunPelYVthifNV63LEw1",
          "card_type" : "VISA",
          "exp_month" : 10,
          "exp_year" : 2017,
          "cvv" : "&#42;&#42;&#42;"
        }
      }
  }</code>
  </pre>
</div>
