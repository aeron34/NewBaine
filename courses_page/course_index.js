//background-color: rgba(20,20,20,1);

const submit = document.getElementById('submit');

arr = [];

let names = ['The early days of crytpo',
'Crypto mining and staking',
'What gives an asset value',
'Scarcity',
'Supply and Demand',
'Why financial math Is Important',
'Division And Porportions',
'Multiplication',
'Math For Stocks/Crypto',
'Market cap',
'Circulating Supply',
'The price correlation tool',
'Bear markets',
'Bull markets',
'Tools to List Circulating Supply',
'Find coins with good Social media',
'Putting It All Together',
'Good money ratios for investing',
'Tax information',
'Invest in multiple coins']

for(let i = 0; i < 17; i++)
{
  let n = i + 1;
  arr.push({name: names[i], url: `${n}/movie.mp4`});
}

console.log(arr);

const good = window.localStorage.getItem('good');

if(good)
{
  Show();

} else {
  setTimeout(function() {
    window.location.replace("http://localhost:3000/")
  }, 10000)
}

function Show()
{
  console.log('good');
  const vid_box = document.getElementById('video_box')

  document.getElementById('main_content').style.display = 'initial';
  document.getElementById('verify').style.display = 'none';

  document.getElementById('video').src = arr[0]['url'];

  for(let i = 0; i < arr.length; i++)
  {
      const div = document.createElement('DIV');
      const p = document.createElement('P');
      div.className = 'vid_btn';
      p.innerHTML = arr[i]['name'];
      div.appendChild(p);
      div.addEventListener("click", function () {
        document.getElementById('video').src = arr[i]['url'];
      });
      vid_box.appendChild(div);
  }
}


/*

  1. create a list of <a> elements
  and make it s'that when it's clicked
  it removes the vide'and loads in a new one.
  (maybe use the load() function)

  2. put the <a> tags in a side bar.

  3. have the landing page have 2 sections:
  courses, about me, and access content

*/
