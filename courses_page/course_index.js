//background-color: rgba(20,20,20,1);

const submit = document.getElementById('submit');


let arr = [{name:'The early days of crytpo',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621835888/movie_p56l1r.mp4'},
{name:'Crypto mining and staking',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621843501/movie_1_fdirsd.mp4'},
{name:'What gives an asset value',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621843771/movie_2_iljmsl.mp4'},
{name:'Scarcity',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844009/movie_3_av1bp6.mp4'},
{name: 'Supply and Demand',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844248/movie_abae3n.mp4'},
{name: 'Why financial math Is Important',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844337/movie_kyc5zb.mp4'},
{name: 'Division And Porportions',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844411/movie_sn0u49.mp4'},
{name: 'Multiplication',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844475/movie_g6b9x4.mp4'},
{name: 'Math For Stocks/Crypto',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844598/movie_lotwlb.mp4'},
{name: 'Market cap',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844773/movie_nkviuh.mp4'},
{name: 'Circulating Supply',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844863/movie_nf6yy4.mp4'},
{name: 'The price correlation tool',
url:'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621844919/movie_utso5m.mp4'},
{name: 'Bear markets',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621845501/movie_kmyeoa.mp4'},
{name:'Bull markets',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621845642/movie_xs7rzf.mp4'},
{name:'Tools to List Circulating Supply',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621846012/movie_ywjlkb.mp4'},
{name:'Find coins with good Social media',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621834792/movie_sab9ug.mp4'},
{name: 'Putting It All Together',
url: 'https://res.cloudinary.com/dvdhvay4c/video/upload/v1621834622/movie_gnjx0e.mp4'}]


console.log(arr);

const good = window.localStorage.getItem('good');

if(good)
{
  Show();

} else {
  setTimeout(function() {
    window.location.replace("https://www.linxthegame.com/")
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
