<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>In order to help prevent fraudulent access and charging, the Gateway provides policy configuration options to Merchants for the API as a whole, as well as on a per-Account basis for transactions. At the API level, Merchants can restrict access to clients with IP addresses in a defined set of ranges. For example, a Merchant that accesses the Gateway via an intermediate application (for example, a hosted web-based application) can set their configuration to restrict the API from accepting requests from any other sources. The IP address restrictions are configured by setting the <span class="code-green">api_allowed_ip_address_ranges</span> property on the Merchant.</p>

      <p>The countries from which transaction operations (Authorize, Void, Capture, Refund, and Credit) are allowed may also be restricted to specific countries. Countries are determined by performing a geographic lookup by IP address. Country restrictions are enforced on a per-Account basis via the <span class="code-green">transaction_allowed_countries</span> property.</p>

      <p>Depending on the Merchant's integration with the Gateway, transaction operations may be performed from by different users, from different IP address ranges. For example, a Merchant that manually runs customer transactions from a partner application that interacts with the Gateway could simply lock API access to the partner application and restrict transaction operations to the country in which the Merchant resides.</p>

      <p>Another common scenario is for the Merchant to expose a <a href="../guides/payment-form-getting-started.html">web-based payment form</a> to customers, perhaps integrated with shopping cart functionality, such that charges are performed by the Merchant's customers instead. In this case, the customer's IP address that must be checked against the country restrictions rather than the application server making requests to the Gateway on behalf of those customers.</p>

      <p>In order to preserve the ability to perform client IP address checks in this scenario, the Gateway supports an optional HTTP header <span class="code-green">X-Relayed-IP-Address</span> in requests. The value of this header is the actual customer IP address on behalf of which the merchant application is making the API request. When the Gateway observes this header in an API request, it first checks that the request's actual IP address (i.e., the merchant application) originates from an address in the Merchant's <span class="code-green">api_allowed_ip_address_ranges</span> list. If the list is empty, or the address matches one of the configured ranges, the request is accepted and the relayed IP address is used for country-based policy checks.</p>

      <p>You can test relaying IP addresses against Merchant client restrictions by modifying the <span class="code-green">curl</span> command line as follows:</p>

      <p><span class="code-green">curl -H "X-Relayed-IP-Address: 127.0.0.1" ...</span></p>
    </div>
  </div>
</div>
