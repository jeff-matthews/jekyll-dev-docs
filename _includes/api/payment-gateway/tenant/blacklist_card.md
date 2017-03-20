Blacklist Card
--------------

    POST /v1/blacklist_card

Tenants may submit credit card numbers to the Gateway blacklist via the
`/v1/blacklist_card` URL. Blacklisted card numbers are rejected in all
authorize, charge, and credit transactions. No response object is
returned, although an HTTP 204 status code is sent to indicate success.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/blacklist_card -d'
{
    "card_number": "4242424242424242",
    "reason": "FRAUDULENT_USE",
    "comment": "Customer reported fraudulent use"
}'</pre>
</div>