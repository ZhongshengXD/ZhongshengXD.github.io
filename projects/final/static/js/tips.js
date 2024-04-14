window.onload = function() {
    // fetch('static/tips.json') 
    fetch('https://zhongshengxd.github.io/projects/part5/static/tips.json')
        .then(response => response.json())
        .then(data => {
            var articlesContainer = document.querySelector('.articles-container');
            data['green_tips'].forEach(tip => {
                var article = document.createElement('article');
                article.className = 'article';

                var img = document.createElement('img');
                img.src = tip.image;
                img.width = '24';
                img.height = '24';
                img.className = 'icon';
                article.appendChild(img);

                var content = document.createElement('div');
                content.className = 'content';
                article.appendChild(content);

                var h3 = document.createElement('h3');
                h3.className = 'subtitle';
                h3.textContent = tip.id + "." + tip.title;
                content.appendChild(h3);

                var pText = document.createElement('p');
                pText.className = 'text';
                pText.textContent = tip.description;
                content.appendChild(pText);

                var pAuthor = document.createElement('p');
                pAuthor.className = 'author';
                pAuthor.textContent = 'Author: ' + tip.author;
                content.appendChild(pAuthor);

                var pPublishDate = document.createElement('p');
                pPublishDate.className = 'publish_date';
                pPublishDate.textContent = 'Publish Date: ' + tip.publish_date;
                content.appendChild(pPublishDate);

                var pScore = document.createElement('p');
                pScore.className = 'score';
                pScore.innerHTML = 'Score: ' + createStars(tip.score);
                content.appendChild(pScore);

                articlesContainer.appendChild(article);
            });
        });
}

function createStars(score) {
    var stars = "";
    for (var i = 0; i < 5; i++) {
        if (score > i) {
            stars += '<span class="star">&#9733;</span>'; // filled star
        } else {
            stars += '<span class="star">&#9734;</span>'; // empty star
        }
    }
    return stars;
}