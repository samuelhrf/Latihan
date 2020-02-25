let WhitneyHouston = {
  Name: 'Whitney Houston',
  Genre: ['R&B', 'pop', 'soul', 'gospel', 'dance'],
  Active: '1977-2012',
}
let MariahCarey = {
  Name: 'Mariah Carey',
  Genre: ['R&B', 'pop', 'hip hop', 'soul'],
  Active: '1989-present',
}
let CocoLee = {
  Name: 'Coco Lee',
  Genre: ['pop', 'c-pop', 'dance-pop', 'hip hop', 'R&B', 'soul'],
  Active: '1993-present',
}
let ChristinaPerri = {
  Name: 'Christina Perri',
  Genre: ['pop', 'pop rock'],
  Active: '2008-present',
}
let MichaelJosephJackson = {
  Name: 'Michael Joseph Jackson',
  Genre: ['pop', 'soul', 'funk', 'rhythm and blues', 'rock', 'disco', 'post-disco', 'dance-pop', 'new jack swing'],
  Active: '1964-2009',
}

let singers = [WhitneyHouston, MariahCarey, CocoLee, ChristinaPerri, MichaelJosephJackson];

/**
 * 1. Display all active singers
 * 2. Display all inactive singers
 * 3. Display all genres that only have one singer
 * 4. Display all genres that have two or more singers
 * 5. Sort singers
 */

console.log('1. Display all active singers')
 for (var i = 0; i < singers.length; i++)
{
    var arrayofstrings = singers[i].Active.split('-')

    for (var j = 0; j < arrayofstrings.length; j++)
    {
        if (arrayofstrings[j] == 'present')
        {
            console.log(singers[i].Name)
        }
    }
}

console.log('\n')

console.log('2. Dislplay all inactive singers')
for (var k = 0; k < singers.length; k++)
{
    var arrayofstrings1 = singers[k].Active.split('-')
    
    for (var l = 1; l < arrayofstrings1.length; l++)
    {
      if (arrayofstrings1[l]!=='present')
      {
        console.log(singers[k].Name)
      }
    }
}

console.log('\n')

console.log('3. Display all genres that only have one singer')

let listOfgenre = {}
for (var m = 0; m < singers.length; m++)
{
  for (var n = 0; n < singers[m].Genre.length; n++)
  if(listOfgenre[singers[m].Genre[n]]==null)
  {
    listOfgenre[singers[m].Genre[n]] = [singers[m].Name]
  }

  else
  {
    listOfgenre[singers[m].Genre[n]].push(singers[m].Name)
  }
}

for (const key in listOfgenre)
  {
    if (listOfgenre[key].length == 1)
    {
      console.log(key)
    }
  }

console.log('\n')

console.log('4. Display all genres that have two or more singers')
let listOfgenre1 = {}
for (var o = 0; o < singers.length; o++)
{
  for (var p = 0; p < singers[o].Genre.length; p++)
  if(listOfgenre1[singers[o].Genre[p]]==null)
  {
    listOfgenre1[singers[o].Genre[p]] = [singers[o].Name]
  }

  else
  {
    listOfgenre1[singers[o].Genre[p]].push(singers[o].Name)
  }
}

for (const key in listOfgenre1)
  {
    if (listOfgenre1[key].length > 1)
    {
      console.log(key)
    }
  }

console.log('\n')

console.log('5. Sort Singers')

  var words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (var q = 0; q < words.length; q++)
  {
    for(var key in singers)
    {
      if (words[q] == singers[key].Name[0])
      {
        console.log(singers[key].Name)
      }
  }
}