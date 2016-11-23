The following message codes are returned in response to problems managing
Tenants and Merchants.

#### account\_number\_exists

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An attempt to add an account or update an existing account such that the bank account
number matches another existing account (having the same bank ID) results in a
`account_number_exists` error being returned.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "account_number_exists",
            "level": "error",
            "message": "An account already exists with bank ID 123456, account number 893459238233",
            "facility": "gateway"
        }
    ]
}</pre>
</div>


#### account\_missing\_required\_field

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An `account_missing_required_field` error is returned if an attempt
is made to add or update an account where the payment fields required to support a
CVV or AVS policy are not included in the account's required payment fields. For
example, attempting to set the account's CVV policy to "REQUIRE\_MATCH\_LENIENT"
without including "cvv" in the required payment fields.

The returned JSON includes the account's ID (on updates only), name, and the
missing required card field.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code" : "account_missing_required_field",
            "level" : "error",
            "facility": "gateway",
            "account_id" : "O_nyotx4QB6LgJEWXda6Tg",
            "account_name" : "Operating",
            "field_name" : "cvv"
        }
    ]
}</pre>
</div>


#### account\_invalid\_required\_field

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An `account_invalid_required_field` error is returned if an attempt
is made to add or update an account in which an invalid payment field name
is included in the account's required payment fields list.

The returned JSON includes the account's ID (on updates only), name, and the
invalid payment field name.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "account_invalid_required_field",
            "level": "error",
            "facility": "gateway",
            "account_id": "O_nyotx4QB6LgJEWXda6Tg",
            "account_name": "Operating",
            "field_name": "something_invalid"
        }
    ]
}</pre>
</div>


#### multiple\_primary\_accounts

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An attempt to create a new Merchant having multiple Accounts marked as primary results
in a `multiple_primary_accounts` error code being returned.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "multiple_primary_accounts",
            "level": "error",
            "facility": "gateway"
        }
    ]
}</pre>
</div>


#### no\_primary\_account

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

If a request is received to create a new Merchant such that one or more Accounts are provided
but no Accounts are marked as primary, the Gateway returns a `no_primary_account`
error code.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "no_primary_account",
            "level": "error",
            "facility": "gateway"
        }
    ]
}</pre>
</div>


#### cannot\_delete\_primary\_account

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An attempt was made to delete a Merchant's primary Account. A different Account
must be marked as primary before the deletion can proceed.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "cannot_delete_primary_account",
            "level": "error",
            "facility": "gateway"
        }
    ]
}</pre>
</div>


#### pending_transactions

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An attempt was made to delete a Merchant Account while pending authorized
live-mode transactions still exist for that Account.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "pending_transactions",
            "level": "error",
            "facility": "gateway"
        }
    ]
}</pre>
</div>


#### unavailable\_for\_merchant\_status

<dl class="dl-horizontal">
  <dt>Level</dt>
  <dd>error</dd>
  <dt>HTTP Status Code</dt>
  <dd>422</dd>
</dl>

An operation was attempted on a Merchant but could not be completed due to the current
status of the Merchant.

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "messages": [
        {
            "code": "unavailable_for_merchant_status",
            "level": "error",
            "message": "The operation cannot be completed due to the current merchant status",
            "facility": "gateway"
        }
    ]
}</pre>
</div>
