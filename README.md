# Fontys Geolocation API
Deze API biedt coördinaten voor locaties op de Fontys Campus in Eindhoven. Je kunt deze API gebruiken voor toepassingen zoals interactieve kaarten of navigatiesystemen.

## Technologieën

Deze API is gebouwd met:
- **Node.js**
- **Express**
- **MongoDB**

## API URL

De API is live beschikbaar op:  
[https://fontys-geolocation-api.onrender.com/](https://fontys-geolocation-api.onrender.com/)

## Gebruik

Je hoeft deze repository niet te clonen om gebruik te maken van de API. Deze repo is namelijk hoe ik mijn server en API gemaakt heb. Om er gebruik van te maken in jou project voeg simpelweg de onderstaande code toe aan jouw project.

### Locaties ophalen met Fetch
```javascript
fetch('https://https://fontys-geolocation-api.onrender.com/')
  .then(response => response.json())
  .then(data => {
    console.log('Locaties:', data);
    // Gebruik de data hier in je project
  })
  .catch(error => console.error('Fout bij ophalen van data:', error));
```

