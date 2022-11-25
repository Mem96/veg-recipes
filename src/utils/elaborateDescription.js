export function cutDescription(description) {
    let firstSentenceEndIndex = description.indexOf('. ');
    let secondSentenceEndIndex = description.indexOf('. ', firstSentenceEndIndex+1);
    let thirdSentenceEndIndex = description.indexOf('. ', secondSentenceEndIndex+1);
    return description.substring(0, thirdSentenceEndIndex+1);
}


export function getRelatedRecipes(description) {
    let relatedRecipes = [];
    let stillFinding = true
    let oldIndexEnd = 0;
    while (stillFinding){
        let startOfLink = description.indexOf('<a', oldIndexEnd)
        if (startOfLink !== -1){
            let endOfLink = description.indexOf('</a>', startOfLink)
            oldIndexEnd = endOfLink+4;
            let wholeLink = description.substring(startOfLink+1, endOfLink);
            let nameOfRelatedRecipe = wholeLink.substring(wholeLink.indexOf('>')+1, endOfLink);
            let linkToRelatedRecipe = wholeLink.substring(wholeLink.indexOf('href=')+6, wholeLink.indexOf('">'));
            relatedRecipes.push({nameOfRelatedRecipe, linkToRelatedRecipe})
        } else {
            stillFinding = false;
        }
    }
    return relatedRecipes;
}