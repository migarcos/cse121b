function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
} 

var sentences = [
    'I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.',
    'Adam fell that men might be; and men are, that they might have joy.',
    'ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men.',
    'if ye do not watch yourselves, and your thoughts, and your words, and your deeds, and observe the commandments of God, and continue in the faith of what ye have heard concerning the coming of our Lord, even unto the end of your lives, ye must perish.',
    '... when ye are in the service of your fellow beings ye are only in the service of your God',
    'For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit,',
    'But abefore ye seek for briches, seek ye for the ckingdom of God.',
    'And after ye have obtained a hope in Christ ye shall obtain riches, if ye seek them; and ye will seek them for the intent to do good ...',
    'faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.',
    'And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me;',
    'Therefore, what manner of men ought ye to be? Verily I say unto you, even as I am.',

];

function sentence() {
    var content = getRandomSentence()
    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
}
