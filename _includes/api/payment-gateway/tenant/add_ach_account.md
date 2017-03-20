Add ACH Account
--------------------
--------------------

    POST /v1/merchants/{merchantId}/ach-accounts

A [Merchant](types#merchant-section) may contain multiple
[ACH Accounts](types#achaccount-section) through which ACH transactions may be processed.
A [Tenant](types#tenant-section) adds an ACH account to a Merchant by POSTing the account
details to `/v1/merchants/{merchantId}/ach-accounts`. The newly created account is
returned in the response.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X POST --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgeRDynFnyBPKdn4XIAAQ/ach-accounts -d'
{
    "type": "TEST",
    "name": "ACH Account",
    "primary": "true",
    "currency": "USD",
    "routing_number": "000000013",
    "account_number": "1234567890",
    "account_type": "CHECKING",
    "processor_auth_key": "test",
    "processor_auth_pass": "test",
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
    "required_payment_fields": "name,address1,city,state,postal_code",
    "transaction_allowed_countries": "US,CA"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "Cn9j655rSem_QzRQXLsbhw",
    "status": "ACTIVE",
    "type": "TEST",
    "processor_auth_key": "test",
    "name": "ACH Account",
    "primary": true,
    "currency": "USD",
    "routing_number": "000000013",
    "account_number": "1234567890",
    "account_type": "CHECKING",
    "bank_name": "FIRST BANK OF TESTING",
    "credit_enabled": true,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "required_payment_fields": "name,address1,city,state,postal_code",
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
    "transaction_allowed_countries": "US,CA"
}</pre>
</div>
