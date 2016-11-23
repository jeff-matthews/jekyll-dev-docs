Add Merchant Account
--------------------
--------------------

    POST /v1/merchants/{merchantId}/accounts

A [Merchant](types#merchant-section) may contain multiple [Merchant Accounts](types#merchantaccount-section)
through which credit card payments may be processed. For example, law firms may use one account
for operating expenses and a second account for trust payments. A [Tenant](types#tenant-section)
adds a Merchant Account to a Merchant by POSTing the account contents to
`/v1/merchants/{merchantId}/accounts`. The newly created account is returned in the response.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type: application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/accounts -d'
{
    "type": "TEST",
    "name": "New Enterprise",
    "primary": "false",
    "bank_id": "123457",
    "account_number": "893459238398",
    "agent_bank_number": "001122",
    "agent_chain_number": "112234",
    "terminal_id": "00000001",
    "merchant_name": "Biz1 Enterprises",
    "category_code": "5144",
    "currency": "USD",
    "service_phone": "9876543210",
    "store_number": "0001",
    "terminal_number": "0001",
    "industry_type": "DIRECT_MARKETING",
    "credit_enabled": true,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "max_transaction_amount": 50000,
    "max_daily_transactions": 100,
    "max_daily_transaction_value": 1000000,
    "max_monthly_transactions": 0,
    "max_monthly_transaction_value": 0,
    "warn_transaction_amount": 40000,
    "warn_daily_transactions": 80,
    "warn_daily_transaction_value": 0,
    "warn_monthly_transactions": 2000,
    "warn_monthly_transaction_value": 2000000,
    "max_credit_amount": 15000,
    "max_daily_credits": 5000,
    "max_daily_credit_value": 500000,
    "max_monthly_credits": 150000,
    "max_monthly_credit_value": 15000000,
    "warn_credit_amount": 10000,
    "warn_daily_credits": 4500,
    "warn_daily_credit_value": 450000,
    "warn_monthly_credits": 125000,
    "warn_monthly_credit_value": 12500000,
    "required_payment_fields": "name,address1,city,state,postal_code,cvv",
    "cvv_policy": "REQUIRE_MATCH_LENIENT",
    "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
    "ignore_avs_failure_if_cvv_match": false,
    "transaction_allowed_countries": "US,CA"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgBZTynEtOBPKgGmXAAAA",
    "status": "ACTIVE",
    "type": "TEST",
    "name": "New Enterprise",
    "primary": false,
    "bank_id": "123457",
    "account_number": "893459238398",
    "agent_bank_number": "001122",
    "agent_chain_number": "112234",
    "terminal_id": "00000001",
    "merchant_name": "Biz1 Enterprises",
    "category_code": "5144",
    "currency": "USD",
    "service_phone": "9876543210",
    "store_number": "0001",
    "terminal_number": "0001",
    "industry_type": "DIRECT_MARKETING",
    "credit_enabled": true,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "max_transaction_amount": 50000,
    "max_daily_transactions": 100,
    "max_daily_transaction_value": 1000000,
    "max_monthly_transactions": 0,
    "max_monthly_transaction_value": 0,
    "warn_transaction_amount": 40000,
    "warn_daily_transactions": 80,
    "warn_daily_transaction_value": 0,
    "warn_monthly_transactions": 2000,
    "warn_monthly_transaction_value": 2000000,
    "max_credit_amount": 15000,
    "max_daily_credits": 5000,
    "max_daily_credit_value": 500000,
    "max_monthly_credits": 150000,
    "max_monthly_credit_value": 15000000,
    "warn_credit_amount": 10000,
    "warn_daily_credits": 4500,
    "warn_daily_credit_value": 450000,
    "warn_monthly_credits": 125000,
    "warn_monthly_credit_value": 12500000,
    "required_payment_fields": "name,address1,city,state,postal_code,cvv",
    "cvv_policy": "REQUIRE_MATCH_LENIENT",
    "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
    "ignore_avs_failure_if_cvv_match": false,
    "transaction_allowed_countries": "US,CA"
}</pre>
</div>
