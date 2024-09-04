document.getElementById('voucherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const guestID = document.getElementById('guestID').value;
    const voucherCode = "T30O77KAJO";
    const baseURL = `https://api.teeg.cloud/vouchers/campaigns/guests/${guestID}/voucher/${voucherCode}?tz=`;
    const authToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI1NDIxNTcyLCJuYmYiOjE3MjU0MjA2NzIsImlwQWRkcmVzcyI6IjE4MC4yNDkuMTg1LjMzIiwiZW1haWxzIjpbImhyZGdhbWVzMTAxQGdtYWlsLmNvbSJdLCJvaWQiOiIzNTk1OGMwNi1hYjBiLTQ5YTgtOTNiMy00MmVkOGE2MmQyNDAiLCJzdWIiOiIzNTk1OGMwNi1hYjBiLTQ5YTgtOTNiMy00MmVkOGE2MmQyNDAiLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6ImY3YTkzNGQ1LWNjYzYtNGM1NC05NjFkLTRmNGFlMjYwOWI3OCIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzI1NDIwNjcyfQ.MckVd9yt4cynwTMZgOAK5DF4W4bhaiyDvC46PZHGOt0RPqDFN1B3vfDncEiH8L8C2JGDWFaW-acwKiu_sUa7iY2I0zW1PH7K3Gy6IjFWYnj2MUR_DtUStaGVHcsdMXO7-BqJ5AtLeYJNW5ZfWwqQFsCWwubzAWXfaVA3bqEBTuS7s8Y46faJ0MFP-ZjEwn9PGVpk0ZcSkfNG4iGSYDbCNZGsaDV3Y-7ChBmPssAqwaPv1LtvzvUS3nfcGojUEn5CQj7BmjnFK4nGeEG-rDqwXDoLjkIH6MArsf7ReFQA-n9vI3sBsnWiUPjWHGblPjgKE7xe4SvU6KKWZCAAUcJMBw`;

    fetch(baseURL, {
        method: 'GET',
        headers: {
            'Authorization': authToken
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('voucherResult').innerText = `Voucher successfully generated for Guest ID: ${guestID}`;
        } else {
            document.getElementById('voucherResult').innerText = `Error: Unable to generate voucher. Status Code: ${response.status}`;
        }
    })
    .catch(error => {
        document.getElementById('voucherResult').innerText = `Request failed: ${error}`;
    });
});
