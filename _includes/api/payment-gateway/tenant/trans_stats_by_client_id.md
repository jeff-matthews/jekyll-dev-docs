Transactions By Client ID
----------------

    GET /v1/stats/transactions/by_client_id

Transaction statistics for integrations can be acquired on a per-client ID basis by issuing
a GET to `/v1/stats/transactions/by_client_id`. All Merchant access tokens are associated
with a unique client ID that identifies the application in which context the transactions
are performed. These applications can be private to an individual Merchant, or public,
allowing a Merchant to delegate access to a trusted third party. The API returns a
[SearchResults](types#searchresults-section) containing [TransactionsByClientId](types#transactionsbyclientid-section)
instances for each client ID requested.

The following URL parameters are supported:

<div class="row-fluid">
  <div class="span11 pull-right">
    <table class="table table-striped table-condensed">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>start_date</td>
          <td>The starting <a href="types#timestamp-section">timestamp</a>, inclusive, of the interval over which the statistics are calculated</td>
        </tr>
        <tr>
          <td>end_date</td>
          <td>The ending <a href="types#timestamp-section">timestamp</a>, exclusive, of the interval over which the statistics are calculated</td>
        </tr>
        <tr>
          <td>client_id</td>
          <td>A client ID for which statistics should be included. This parameter may be specified multiple times to collect statistics
          on several client IDs in a single request.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p>&nbsp;</p>

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl --user username:password {{site.data.variables.apiurl.gateway}}/v1/stats/transactions/by_client_id?start_date=2016-05-01T00:00:00.000Z&amp;end_date=2016-06-01T00:00:00.000Z&amp;client_id=MyApp</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
  "page" : 1,
  "page_size" : 1,
  "total_entries" : 1,
  "results" : [ {
    "client_id" : "MyApp",
    "start_time" : "2016-05-01T00:00:00.000Z",
    "end_time" : "2016-06-01T00:00:00.000Z",
    "summaries" : [ {
      "payment_type" : "CARD",
      "status" : "AUTHORIZED",
      "count" : 129,
      "volume" : 16031
    }, {
      "payment_type" : "CARD",
      "status" : "FAILED",
      "count" : 26,
      "volume" : 984
    }, {
      "payment_type" : "CARD",
      "status" : "COMPLETED",
      "count" : 54,
      "volume" : 4853
    }, {
      "payment_type" : "CARD",
      "status" : "VOIDED",
      "count" : 43,
      "volume" : 5308
    } ]
  } ]
}</pre>
</div>
