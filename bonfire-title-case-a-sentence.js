// Bonfire: Title Case a Sentence
// Author: @srinivasdasu
// Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function titleCase(str) {
  str=str.toLowerCase().split(' ');
  console.log(str);
  for( var i=0;i<str.length;i++)
    {
      str[i]=str[i].replace(str[i].charAt(0),str[i].charAt(0).toUpperCase());
      //console.log(k);
      //str[i]=str[i].replace(str[i].charAt(0),k);
      //console.log(str[i]);
    }
  return str.join(' ');
}

titleCase("I'm a little tea pot");