# Web Development Project 4 - Veni Vici!

Submitted by: **Bryce Alexander**

This web app is a random discovery tool that lets users explore Rick and Morty characters through API-generated results. Each click of the Discover button fetches a new random character, displaying their image and key attributes (species, status, and gender). Users can interact with these attributes by adding them to a ban list, which prevents future results from including those traits. The app also includes a history section that tracks previously viewed characters during the session.

Time spent: **10–12 hours**

---

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Each character displays image, name, species, status, and gender consistently across all API calls.

- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Only one character is shown at a time.
  - Each result includes a matching image and attributes from the same API response.

- [x] **API call response results should appear random to the user**
  - Each button click generates a random character ID from the Rick and Morty API.

- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - Species, status, and gender are all clickable.
  - Clicking adds/removes values from the ban list immediately.

- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Banned attributes are filtered out before displaying results.
  - The app will retry fetching until a valid character is found or attempts are exhausted.

---

## Optional Features

- [x] Multiple types of attributes are clickable and can be added to the ban list

- [x] Users can see a stored history of their previously displayed results from this session
  - A history panel shows all previously viewed characters with images and names.

---

## Additional Features

- Added loading state while fetching new characters
- Prevented infinite loops with attempt limits when too many attributes are banned
- Responsive 3-column dashboard layout for better UI/UX
- Duplicate prevention in history list

---

## Video Walkthrough

<img src='YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

---

## Notes

The main challenge was implementing the ban list logic in a way that still allowed random API results while ensuring filtered results never appear. Handling edge cases where too many attributes are banned required adding a safety limit to prevent infinite loops.

---

## License

Copyright 2026 Bryce Alexander

Licensed under the Apache License, Version 2.0
