// await get data from "https://portiaportia.github.io/json/house-plans.json"
// parse the data and log the result to the console
async function fetchHousePlans() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/house-plans.json');
        const houses = await response.json();

        const housesHtml = houses.map(house => {
            const features = house.features.map(feature => `<li>${feature}</li>`).join('');
            const floorPlansHtml = house.floor_plans.map(plan => `
<div class="floor-plan">
  <h3>${plan.name}</h3>
  <img src="https://portiaportia.github.io/json/images/house-plans/${plan.image}">
</div>
`).join('');

            return `
<div class="house">
    <div class="house-header">
        <h2>${house.name}</h2>
    </div>
    <div class="house2">
        <img src="https://portiaportia.github.io/json/images/house-plans/${house.main_image}" class="house-image">
        <div class="house-details">
            <span><strong>Size:</strong> ${house.size} sq ft</span><br>
            <span><strong>Bedrooms:</strong> ${house.bedrooms}</span><br>
            <span><strong>Bathrooms:</strong> ${house.bathrooms}</span><br>
            <ul>${features}</ul>
        </div>
    </div>
    <div class="floor-plans">
        ${floorPlansHtml}
    </div>
</div>
`;
        }).join('');

        document.getElementById('house-list').innerHTML = housesHtml;
    } catch (error) {
        console.error('Could not fetch the house plans', error);
    }
}