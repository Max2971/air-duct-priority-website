# Google My Maps: Completed Jobs Map

The Service Area page displays the public Google My Maps completed-jobs map.

## Initial Setup

1. Sign in to the permanent Air Duct Priority Google account.
2. Open Google My Maps and create a map named `Air Duct Priority - Jobs Completed Near You`.
3. Import the `Map Import` sheet from `air-duct-priority-my-maps-template.xlsx`.
4. Choose `Address` as the location column.
5. Choose `Address` as the marker title.
6. Style markers by the `Service` column.
7. Replace all demonstration addresses with confirmed completed-job addresses before publishing.
8. Set sharing to public and select `Embed on my site`.
9. If the map is replaced in the future, update its public map ID in `CompletedJobsMap.tsx`.

## Monthly Update

1. Add approximately ten new rows to the master Excel file.
2. Use only an existing value from the `Services` sheet.
3. Check for duplicate addresses and spelling mistakes.
4. In My Maps, open the layer menu and choose `Reimport and merge`.
5. Replace all items using the updated `Map Import` sheet.
6. Confirm that the new markers appear in the correct locations.

## Data Rules

- The public import sheet contains only `Address` and `Service`.
- Use complete addresses: street number, street, city, state, and ZIP code.
- Keep one row per address. For multiple services, use the most important service performed.
- The six included addresses are public municipal locations for testing only. They must not be
  presented as completed customer jobs on the public website.
- Keep customer permission records separately from the public map workbook.

## Demonstration Address Sources

The test addresses are public municipal locations verified from official local-government sites:

- [Doylestown Borough Hall](https://www.doylestownborough.net/contact/)
- [Newtown Township Municipal Building](https://newtownpa.gov/contact-newtown-township/)
- [Warrington Township](https://warringtontownship.org/information/contact_us/index.php)
- [Warminster Township Building](https://warminstertownship.org/about-warminster-township/)
- [Lansdale Borough Hall](https://www.lansdale.org/262/Lansdale-Borough-Hall)
- [Horsham Township](https://www.horsham.org/people)

## Recommended Marker Colors

- Air Duct Cleaning: blue
- Dryer Vent Cleaning: orange
- Dryer Vent Repair: red
- Dryer Vent Installation: green
- Air Duct Installation: purple
- Other services: gray
