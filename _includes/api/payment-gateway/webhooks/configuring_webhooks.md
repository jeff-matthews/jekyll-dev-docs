<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>You configure the URLs to which events are POSTed by setting the <span class="code-green">live_events_urls</span> and
      <span class="code-green">test_events_urls</span> properties of your <span class="code-green">merchant</span> object. This is accomplished via the <a href="#update-merchant">Update Merchant</a> endpoint. The URL to which events are POSTed
      depends on the test vs live mode of the change. Changes that have a mode, such as transactions,
      are sent to the URL corresponding to that mode. For example, changes to test mode transactions
      are sent to the URLs registered with the <span class="code-green">test_events_urls</span> property, while changes to live
      mode transactions are sent to the URLs defined by <span class="code-green">live_events_urls</span>. Changes that aren't
      associated with either mode are sent to both sets of URLs.</p>

      <p>You may specify any URL you wish to receive Events. Keep in mind that while no sensitive payment
      details are ever communicated in the Event data, personally identifiable information such as
      customer names and addresses may be included. For this reason, we strongly recommend using the
      HTTPS scheme for all URLs.</p>
    </div>
  </div>
</div>
