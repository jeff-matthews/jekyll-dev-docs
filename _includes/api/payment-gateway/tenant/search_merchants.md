Search Merchants
----------------

    GET /v1/merchants

The [Merchants](types#merchant-section) associated with the authenticated
[Tenant](types#tenant-section) are returned via a GET request to
`/v1/merchants`. The API supports pagination over the result set by
allowing the client to specify the number of results per logical "page",
the page to view, sort order and filtering. The following URL parameters
are supported:

<div class="row">
  <div class="col-md-11 col-md-push-1">
    <table class="table table-striped table-condensed">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>page</td>
          <td>The page number to view (starting from 1)</td>
        </tr>
        <tr>
          <td>page_size</td>
          <td>The number of results to return per logical page</td>
        </tr>
        <tr>
          <td>filter_property</td>
          <td>The name of a property on the Merchant JSON entity used to filter the results.
            Only Merchants for which the specified property matches the specified filter_pattern
            are returned.
          </td>
        </tr>
        <tr>
          <td>filter_pattern</td>
          <td>The value that must match the specified filter_property in order for the Merchant
            to be included in the search results. The '*' character may be used for wildcard
            matching.
          </td>
        </tr>
        <tr>
          <td>order_by</td>
          <td>A comma-separated list of properties used to sort the results. By default, the
            results are sorted in ascending order by the property. Each property may optionally
            be preceded by a '-' or '+' character to specify descending or ascending sort order.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Return page 2 of the Tenant's Merchants with 10 results per page, sorted
by status, followed by name (descending), where the name contains a 'b'.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl --user username:password "{{site.data.variables.apiurl.gateway}}/v1/merchants?page=2&amp;page_size=10&amp;filter_property=name&amp;filter_pattern=b&amp;order_by=status,-name"</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "page": 1,
    "page_size": 10,
    "total_entries": 62,
    "results": [
        {
            "id": "wKgBZTyZElCBPJkSegMABg",
            "name": "Biz2",
            "auth_user": "username",
            "status": "ACTIVE",
            ...
        },
        {
            "id": "wKgBZTyZElCDDJkSegMAoC",
            "name": "Biz3",
            "auth_user": "m_wKgBZTyZElCBPJkSegIABQ",
            "status": "ACTIVE",
            ...
        },
        ...
    ]
}</pre>
</div>
