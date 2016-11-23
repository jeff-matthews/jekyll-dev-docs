Credit
------

    POST /v1/credits

[Credits](types#credit) allow you to return funds to a customer credit card
or bank account independent of any existing Charges. Credits can be used to refund
customers using payment methods that do not match the originating payment type, or
to accommodate scenarios in which the original payment method is no longer available.
The Credit API is disabled by default, and must be enabled by the Tenant on a per-account
basis.

A Credit is created by sending an amount and payment method in a JSON POST to
`/v1/credits`. If no account ID is specified in the request, the Gateway automatically
selects the primary merchant or ACH account, depending on the type of payment method
specified; for example, providing a bank method results in the primary ACH account being
selected. If no matching account is found, or if an account ID is provided but does not
match the payment method, the credit is rejected.

The Gateway authorizes the funds transfer and returns the JSON Credit in the response.
Credits are captured automatically by the Gateway on a daily basis. 

**Example:** Credit funds to a credit card

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/credits -d '
{
    "amount": "1255",
    "method": {
        "type": "card",
        "number": "4242424242424242",
        "exp_month": 10,
        "exp_year": 2013,
        "cvv": "123",
        "name": "Sample Customer",
        "address1": "123 Main St",
        "city": "Austin",
        "state": "TX",
        "postal_code": "78730"
    }
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "mj6BKuWjTqeXRGL7zZZapA",
    "type": "CREDIT",
    "account_id": "wKgFeDz5HF-BPPl08dcADQ",
    "status": "AUTHORIZED",
    "amount": 1255,
    "currency": "USD",
    "method": {
        "type": "card",
        "number": "************4242",
        "fingerprint": "CmsP3lYV4akuOz12pFa8",
        "card_type": "VISA",
        "exp_month": 10,
        "exp_year": 2013,
        "name": "Some Customer",
        "address1": "123 Main St",
        "city": "Austin",
        "state": "TX",
        "postal_code": "78730"
    }
}</pre>
</div>


**Example:** Credit funds to a bank account

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/credits -d '
{
    "amount": "18000",
    "method": {
        "type": "bank",
        "routing_number": "000000013",
        "account_number": "1100000003",
        "account_type": "SAVINGS"
    }
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "OHqxGhSTT3KckThAEhX57A",
    "type": "CREDIT",
    "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
    "status": "AUTHORIZED",
    "amount": 18000,
    "currency": "USD",
    "method": {
        "type": "bank",
        "routing_number" : "******013",
        "account_number" : "******0003",
        "account_type" : "SAVINGS",
        "fingerprint" : "4LPFVT7k2aQB3J70ZBGH",
        "bank_name": "FIRST BANK OF TESTING"
    }
}</pre>
</div>


**Example:** Credit funds to a saved bank
<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/credits -d '
{
    "amount": "18000",
    "method": "vU42KZWhTd2iiGLhjfJR6A"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "dkWEi9yYQrCmBhNZYOALRA",
    "type": "CREDIT",
    "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
    "status": "AUTHORIZED",
    "amount": 2398,
    "currency": "USD",
    "method": {
        "type": "bank",
        "routing_number" : "******013",
        "account_number" : "******0003",
        "account_type" : "SAVINGS",
        "fingerprint" : "4LPFVT7k2aQB3J70ZBGH",
        "bank_name": "FIRST BANK OF TESTING"
    }
}</pre>
</div>
