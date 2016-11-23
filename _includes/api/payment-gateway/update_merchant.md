<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">PUT</span> <span class="code-green">/v1/merchant</span></p>

      <p>A Merchant may update their merchant name, contact information, and client policy constraints by sending a JSON <a href="#merchant" style="font-family:monospace">merchant</a> containing the updated information to the <span class="code-green">/v1/merchant</span> endpoint. The updated Merchant is returned.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre><code>curl -X PUT --user secret_key: -H "Content-Type: application/json" https://api.chargeio.com/v1/merchant -d '
  {
      "name": "Biz1 Updated",
      "contact_name": "Merchant Contact",
      "contact_email": "admin@biz1.com",
      "contact_phone": "9876543210",
      "address1": "97 Hammond St",
      "city": "Bangor",
      "state": "ME",
      "postal_code": "04401",
      "country": "US",
      "timezone": "America/New_York",
      "api_allowed_ip_address_ranges": "16.42.10.0/30",
      "live_events_urls": "http://merchant.example.com/events/live,http://system2.example.com/messages",
      "test_events_urls": "http://merchant.example.com/events/test",
  }'</code></pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "id": "wKgFeDz5HF-BPPl08dcACw",
      "name": "Biz1 Updated",
      "public_key": "m_wKgFeD0hHlaBPSGgaAQAAA",
      "contact_name": "Merchant Contact",
      "contact_email": "admin@biz1.com",
      "contact_phone": "9876543210",
      "address1": "97 Hammond St",
      "city": "Bangor",
      "state": "ME",
      "postal_code": "04401",
      "country": "US",
      "timezone": "America/New_York",
      "api_allowed_ip_address_ranges": "16.42.10.0/30",
      "live_events_urls": "http://merchant.example.com/events/live,http://system2.example.com/messages",
      "test_events_urls": "http://merchant.example.com/events/test",
      "merchant_accounts": [
          ...
      ],
      "bank_accounts": [
          ...
      ]
  }</code></pre>
</div>
