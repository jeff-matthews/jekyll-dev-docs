---
layout: default
title: "Enable Email Receipts"
permalink: /guides/enable-email-receipts.html
---

You can configure the {{site.data.variables.dashboard}} to automatically email you and/or your customers a [receipt](#sample-email-receipts) after processing a transaction (e.g., payment, refund, void).

To enable email receipts:
<ol>
  <li>Log in to <a href="https://secure.affinipay.com/login" target="&#95;blank">https://secure.affinipay.com/login</a>.<i class="fa fa-info-circle superscript tooltipped" data-position="top" data-delay="50" data-tooltip="LawPay users should go to https://secure.lawpay.com/login"></i></li>
  <li>Click your name in the top-right corner and click <b>Developers</b>.

    <p><img width="30%" src="../images/developers.png"></p></li>

  <li>Locate your application in the <b>Authorized Applications</b> grid.</li>
  <li>Click <b>Off</b> beside one (or both) of the following options to turn receipts <b>On</b>:
  <p><img width="80%" src="../images/enable-payment-receipts.png"></p>
    <ul>
      <li><b>Send <u>customer</u> receipts when a payment is processed</b> - Send a receipt to the email address entered by a customer on the payment page; requires an email address field on your payment page.</li>
      <li><b>Send <u>merchant</u> receipts when a payment is processed</b> - Receive an email receipt when a customer makes a payment. Sends a receipt to all email addresses listed in <b>Settings</b> > <b>Payment Settings</b> > <b>Merchant Notifications</b>.</li>
    </ul>
  </li>
</ol>

## Resend a Receipt
{% include tasks/resend-receipt.md %}

## Sample Email Receipts
When generating an email receipt, the system populates a static HTML template with the details from <b>Settings</b> > <b>My Business</b> and <b>Settings</b> > <b>Payment Pages</b> (e.g., your business name, address, phone number, website, and logo). The following sections show examples of payment email receipts for both merchants and customers.

### Merchant Receipt
<p><img src="../images/merchant-receipt.png"></p>

### Customer Receipt
<p><img src="../images/customer-receipt.png"></p>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#resend-a-receipt">Resend a Receipt</a></li>
      <li><a href="#sample-email-receipts">Sample Email Receipts</a></li>
    </ul>
  </div>
</div>
</scrollspy-toc>
