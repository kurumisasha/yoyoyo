document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');
    const cardNumberInput = document.getElementById('cardNumber');

    // Set the Guest ID, Voucher ID, and Time Zone as constants
    const guestId = '2010465065'; // Pastikan guest ID ini benar
    const voucherId = 'T30O77KAJO'; // Pastikan voucher ID ini benar
    const timeZone = 'Asia/Jakarta'; // Ganti dengan time zone yang valid

    generateButton.addEventListener('click', function () {
        const cardNumber = cardNumberInput.value.trim();

        if (!cardNumber) {
            alert('Please enter a card number');
            return;
        }

        fetchVoucherDetails(guestId, voucherId, cardNumber, timeZone);
    });

    function fetchVoucherDetails(guestId, voucherId, cardNumber, timeZone) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/guests/${guestId}/voucher/${voucherId}?tz=${timeZone}`;
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI1NDIxNTcyLCJuYmYiOjE3MjU0MjA2NzIsImlwQWRkcmVzcyI6IjE4MC4yNDkuMTg1LjMzIiwiZW1haWxzIjpbImhyZGdhbWVzMTAxQGdtYWlsLmNvbSJdLCJvaWQiOiIzNTk1OGMwNi1hYjBiLTQ5YTgtOTNiMy00MmVkOGE2MmQyNDAiLCJzdWIiOiIzNTk1OGMwNi1hYjBiLTQ5YTgtOTNiMy00MmVkOGE2MmQyNDAiLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6ImY3YTkzNGQ1LWNjYzYtNGM1NC05NjFkLTRmNGFlMjYwOWI3OCIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzI1NDIwNjcyfQ.MckVd9yt4cynwTMZgOAK5DF4W4bhaiyDvC46PZHGOt0RPqDFN1B3vfDncEiH8L8C2JGDWFaW-acwKiu_sUa7iY2I0zW1PH7K3Gy6IjFWYnj2MUR_DtUStaGVHcsdMXO7-BqJ5AtLeYJNW5ZfWwqQFsCWwubzAWXfaVA3bqEBTuS7s8Y46faJ0MFP-ZjEwn9PGVpk0ZcSkfNG4iGSYDbCNZGsaDV3Y-7ChBmPssAqwaPv1LtvzvUS3nfcGojUEn5CQj7BmjnFK4nGeEG-rDqwXDoLjkIH6MArsf7ReFQA-n9vI3sBsnWiUPjWHGblPjgKE7xe4SvU6KKWZCAAUcJMBw';

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching voucher: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                voucherDetails.innerHTML = `
                    <p><strong>Card Number:</strong> ${data.card_number}</p>
                    <p><strong>Voucher Amount:</strong> ${data.amount}</p>
                    <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching voucher details:', error);
                voucherDetails.innerHTML = '<p>Failed to fetch voucher details. Please try again later.</p>';
            });
    }
});
