Get Merchant By ID
------------------

    GET /v1/merchants/{merchantId}

The full details of a Tenant's [Merchant](types#merchant-section) is
retrieved via a GET to `/v1/merchants/{merchantId}` where `merchantId`
is the `id` associated with the Merchant.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl --user username:password {{site.data.variables.apiurl.gateway}}/v1/merchants/wKgFeDz-H6WBPP5YjHcAAg</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgFeDz-H6WBPP5YjHcAAg",
    "name": "Biz1",
    "auth_user": "m_wKgFeDz-H6WBPP5Yi6kAAQ",
    "status": "ACTIVE",
    "contact_name": "Merchant Contact",
    "contact_email": "admin@biz1.com",
    "contact_phone": "9876543210",
    "address1": "97 Hammond St",
    "city": "Bangor",
    "state": "ME",
    "postal_code": "04401",
    "country": "US",
    "timezone": "America/New_York",
    "api_allowed_ip_address_ranges": "127.0.0.1/32,198.51.100.1/24"
    "merchant_accounts": [
        {
            "id": "wKgFeDz-H6WBPP5YjHcAAw",
            "status": "ACTIVE",
            "type": "TEST",
            "name": "Trust",
            "primary": false,
            "bank_id": "123456",
            "account_number": "832458972349",
            "agent_bank_number": "223344",
            "agent_chain_number": "334455",
            "terminal_id": "11223344",
            "merchant_name": "Biz1 Merchant",
            "category_code": "5144",
            "currency": "USD",
            "service_phone": "9876543210",
            "store_number": "0002",
            "terminal_number": "0001",
            "credit_enabled": false,
            "nonoriginating_refund_enabled": false,
            "recurring_charges_enabled": false,
            "max_transaction_amount": 0,
            "max_daily_transactions": 100,
            "max_daily_transaction_value": 0,
            "max_monthly_transactions": 3000,
            "max_monthly_transaction_value": 0,
            "warn_transaction_amount": 0,
            "warn_daily_transactions": 80,
            "warn_daily_transaction_value": 0,
            "warn_monthly_transactions": 2000,
            "warn_monthly_transaction_value": 1000000,
            "max_credit_amount": 0,
            "max_daily_credits": 0,
            "max_daily_credit_value": 0,
            "max_monthly_credits": 0,
            "max_monthly_credit_value": 0,
            "warn_credit_amount": 0,
            "warn_daily_credits": 0,
            "warn_daily_credit_value": 0,
            "warn_monthly_credits": 0,
            "warn_monthly_credit_value": 0,
            "required_payment_fields": "name,cvv",
            "cvv_policy": "REQUIRE_MATCH_LENIENT",
            "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
            "ignore_avs_failure_if_cvv_match": true,
            "transaction_allowed_countries": "US,CA"
        }, {
            "id": "wKgFeDz-H6WBPP5YjHgABA",
            "status": "ACTIVE",
            "type": "TEST",
            "name": "Operating",
            "primary": true,
            "bank_id": "123456",
            "account_number": "893459238233",
            "agent_bank_number": "001122",
            "agent_chain_number": "112233",
            "terminal_id": "00112233",
            "merchant_name": "Biz1 Merchant",
            "category_code": "5144",
            "currency": "USD",
            "service_phone": "9876543210",
            "store_number": "0001",
            "terminal_number": "0001",
            "credit_enabled: true,
            "nonoriginating_refund_enabled": true,
            "recurring_charges_enabled": true,
            "max_transaction_amount": 30000,
            "max_daily_transactions": 10000,
            "max_daily_transaction_value": 1000000,
            "max_monthly_transactions": 300000,
            "max_monthly_transaction_value": 30000000,
            "warn_transaction_amount": 25000,
            "warn_daily_transactions": 9000,
            "warn_daily_transaction_value": 900000,
            "warn_monthly_transactions": 250000,
            "warn_monthly_transaction_value": 25000000,
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
            "required_payment_fields": "name",
            "cvv_policy": "REQUIRE_MATCH_LENIENT",
            "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
            "ignore_avs_failure_if_cvv_match": false,
            "transaction_allowed_countries": "US,CA"
        }
    ]
}</pre>
</div>
