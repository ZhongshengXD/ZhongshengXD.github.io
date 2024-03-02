class Tree {
    constructor(name, type, growthRate, height, lifespan, habitat, description, imageFileName) {
        this.name = name;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.imageFileName = imageFileName;
        this.description = description;
    }

    getSection() {
        return `<div class="tree-card" id="${this.name.replace(/\s/g, '')}">
                <h3>${this.name}</h3>
                <img src="images/${this.imageFileName}" alt="${this.name}">
              </div>`;
    }

getExpandedSection() {
    return `<div id="${this.name.replace(/\s/g, '')}Modal" class="w3-modal" style="display: none;">
            <div class="w3-modal-content">
              <header class="w3-container w3-teal"> 
                <span onclick="document.getElementById('${this.name.replace(/\s/g, '')}Modal').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>
                <h2>${this.name}</h2>
              </header>
              <div class="w3-container modal-content">
                <div class="modal-description">
                    <p><strong>Type:</strong> ${this.type}</p>
                    <p><strong>Growth Rate:</strong> ${this.growthRate}</p>
                    <p><strong>Height:</strong> ${this.height} ft</p>
                    <p><strong>Lifespan:</strong> ${this.lifespan} years</p>
                    <p><strong>Habitat:</strong> ${this.habitat}</p>
                    <p>${this.description}</p>
                </div>
                <div class="modal-image">
                    <img src="images/${this.imageFileName}" alt="${this.name}" style="width:100%">
                </div>
              </div>
            </div>
          </div>`;
}
}

let trees = [
    // new Tree("Bald Cypress", "Deciduous", "Moderate", "50-70", "600", "Wetlands", "garden.jpg"),
    // new Tree("Eastern Redbud", "Deciduous", "Fast Growth", "20", "60", "Forest understory", "golden.jpg"),
    new Tree("Jacaranda tree", "Deciduous", "Fast", "20-40 feet", "50-100 years", "Tropical and subtropical regions",
        "Jacaranda trees are known for their beautiful pink or purple flowers, which bloom in the spring. They are native to South America, but they can now be found in many parts of the world. Jacaranda trees are relatively fast-growing, and they can reach a height of 20-40 feet. They have a lifespan of 50-100 years. Jacaranda trees prefer full sun and well-drained soil. They are drought-tolerant and can withstand some salt spray. Jacaranda trees are popular ornamental trees, and they are also used for shade and windbreaks.",
        "jacaranda.jpg"),
    new Tree("Ficus", "Evergreen", "Slow to moderate", "50-100 feet", "100-200 years", "Tropical and subtropical regions",
        "Ficus trees are a large and diverse group of trees that includes the banyan tree, the rubber tree, and the fig tree. Ficus trees are native to tropical and subtropical regions, but they can now be found in many parts of the world. Ficus trees are evergreen, meaning that they keep their leaves year-round. They can grow to be very large, with some species reaching heights of over 100 feet. Ficus trees have a lifespan of 100-200 years. Ficus trees prefer full sun and well-drained soil. They are tolerant of a variety of conditions, including drought, salt spray, and poor soil. Ficus trees are popular ornamental trees, and they are also used for shade and windbreaks.",
        "Ficus.jpg"),
    new Tree("Oak", "Deciduous", "Moderate", "50-100 feet", "100-200 years", "Temperate regions",
        "Oak trees are a large and diverse group of trees that includes the red oak, the white oak, and the live oak. Oak trees are native to temperate regions, but they can now be found in many parts of the world. Oak trees are deciduous, meaning that they lose their leaves in the fall. They can grow to be very large, with some species reaching heights of over 100 feet. Oak trees have a lifespan of 100-200 years. Oak trees prefer full sun and well-drained soil. They are tolerant of a variety of conditions, including drought, salt spray, and poor soil. Oak trees are popular ornamental trees, and they are also used for shade and windbreaks.",
        "Oak.jpg"),
    new Tree("Willow", "Deciduous", "Fast", "40-60 feet", "30-50 years", "Wet areas",
        "Willow trees are a group of trees that includes the weeping willow, the pussy willow, and the black willow. Willow trees are native to wet areas, but they can now be found in many parts of the world. Willow trees are deciduous, meaning that they lose their leaves in the fall. They can grow to be very large, with some species reaching heights of over 100 feet. Willow trees have a lifespan of 30-50 years. Willow trees prefer full sun and wet soil. They are tolerant of a variety of conditions, including drought, salt spray, and poor soil. Willow trees are popular ornamental trees, and they are also used for shade and windbreaks.",
        "Willow.jpg"),
    
];


function displayTrees(trees) {
    const container = document.getElementById('tree-container');
    let treeHTML = '';
    let modalHTML = '';
    trees.forEach(tree => {
        treeHTML += tree.getSection();
        modalHTML += tree.getExpandedSection();
    });
    container.innerHTML = treeHTML;
    document.body.innerHTML += modalHTML;
}

function addModalListeners(trees) {
    trees.forEach(tree => {
        const treeElement = document.getElementById(tree.name.replace(/\s/g, ''));
        treeElement.onclick = () => {
            document.getElementById(tree.name.replace(/\s/g, '') + 'Modal').style.display = 'block';
        };
    });
}