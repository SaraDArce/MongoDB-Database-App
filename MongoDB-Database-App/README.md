Band Booking App
Welcome to the Band Booking App! This application provides a straightforward API for managing information about bands and handling booking inquiries. Users can view details about different bands and submit inquiries to book them for events.

Features
View a list of all bands.
Get details about a specific band by its ID.
Submit booking inquiries for specific bands.
Retrieve all booking inquiries for a particular band.
Getting Started
To set up and run the Band Booking App locally, follow these simple steps:

API Endpoints
Get Bands:

Endpoint: /api/bands
Method: GET
Get Band by ID:

Endpoint: /api/bands/:id
Method: GET
Submit Booking Inquiry:

Endpoint: /api/inquiries
Method: POST
Request Body:
json

{
"bandId": "band_id",
"name": "Your Name",
"email": "your@email.com",
"message": "I am interested in booking your band for an event."
}
Get Inquiries for a Band:

Endpoint: /api/inquiries/:bandId
