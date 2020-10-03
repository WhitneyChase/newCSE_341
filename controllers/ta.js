   

//_______WEEK 02________//

//a constant array for the user to see
const userArray = ['Jack', 'Jose', 'Gin', 'Brandy', 'Jim'];

exports.postTeam02AddUser = (req, res, next) => {

    //grabs the info from the get body
    const newUser = req.body.newUser;
    
    for (let i = 0; i < userArray.length; i++){
        if (newUser == userArray[i]){
            res.send('<h1>User Already Added<h1>')
        }else{
            userArray.push(newUser);
        }
    }
   

    //this was new after you add the user you go back to the page original page
    res.redirect('/ta02');
};


exports.postTeam02RemoveUser = (req, res, next) => {
    const rmvUser = req.body.rmvUser;

    // Splice method removes from a const array
    const index = userArray.indexOf(rmvUser);
    if (index !== -1 ) {
        userArray.splice(index, 1);
    }

    if (index !== rmvUser){
        res.send('<h1>User must be added before they can be removed<h1>')
    }

   //this was new after you add the user you go back to the page original page
    res.redirect('/ta02/');
}; 


exports.getTeam02 = (req, res, next) => {
    res.render('pages/ta02', {
        title: 'Team Activity 02',
        users: userArray,
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 




//_______WEEK 03________//
const parsingJsonObj = [
    {
      "tags": [
        "Trees"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/1.jpg",
      "price": 10.99,
      "name": "Handcrafted Trees Tech",
      "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur"
    },
    {
      "tags": [
        "Beach",
        "Ocean",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/2.jpg",
      "price": 19.99,
      "name": "Rustic Beach Tech",
      "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus"
    },
    {
      "tags": [
        "Animal",
        "Bear"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/3.jpg",
      "price": 17.99,
      "name": "Handcrafted Bear Tech",
      "description": "vitae mollitia et in accusantium est voluptas officiis est non"
    },
    {
      "tags": [
        "Road"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/4.jpg",
      "price": 15.99,
      "name": "Refined Road Tech",
      "description": "explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam"
    },
    {
      "tags": [
        "Ocean",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/5.jpg",
      "price": 10.99,
      "name": "Unbranded Ocean Tech",
      "description": "facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui"
    },
    {
      "tags": [
        "Sunset",
        "Beach",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/6.jpg",
      "price": 9.99,
      "name": "Rustic Ocean Tech",
      "description": "libero reprehenderit blanditiis quidem laborum ullam quae fuga consequuntur minima praesentium consequatur qui excepturi nostrum tempora sunt deleniti"
    },
    {
      "tags": [
        "Rust",
        "Old",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/7.jpg",
      "price": 19.99,
      "name": "Sleek Old Tech",
      "description": "necessitatibus suscipit iure quia voluptates voluptas quidem ipsum laboriosam adipisci"
    },
    {
      "tags": [
        "Coffee"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/8.jpg",
      "price": 14.99,
      "name": "Sleek Coffee Tech",
      "description": "et adipisci explicabo consequatur rerum voluptas dolorem qui omnis vel"
    },
    {
      "tags": [
        "Trees",
        "Fog",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/9.jpg",
      "price": 16.99,
      "name": "Rustic Trees Tech",
      "description": "ut architecto est similique sit nostrum sit sed ipsa itaque aliquam nesciunt reprehenderit et neque aut id nulla dolore sed sit facere eligendi"
    },
    {
      "tags": [
        "Sunset",
        "Ocean",
        "Dock"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/10.jpg",
      "price": 18.99,
      "name": "Sleek Ocean Tech",
      "description": "magnam maxime nostrum minima dolores repellat laborum pariatur et quia maiores quidem eos quod est voluptas voluptatem quia ipsum odit dolorem et blanditiis aut voluptates"
    },
    {
      "tags": [
        "Person",
        "Hills",
        "Animals",
        "Sheep"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/11.jpg",
      "price": 16.99,
      "name": "Ergonomic Person Tech",
      "description": "sunt id omnis nihil consectetur et porro ut molestias ab et rem quia omnis voluptatem est libero reiciendis voluptatem dolores excepturi"
    },
    {
      "tags": [
        "Fog",
        "Lake",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/12.jpg",
      "price": 9.99,
      "name": "Gorgeous Water Tech",
      "description": "perspiciatis in qui et nemo nisi ad quam consequatur et dignissimos"
    },
    {
      "tags": [
        "Person",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/13.jpg",
      "price": 14.99,
      "name": "Generic Fog Tech",
      "description": "consectetur voluptas sint excepturi voluptas aut culpa qui excepturi dicta ut voluptas"
    },
    {
      "tags": [
        "Building",
        "Metal"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/14.jpg",
      "price": 11.99,
      "name": "Gorgeous Building Tech",
      "description": "quisquam maxime laudantium error totam unde commodi ullam qui quo sed aperiam"
    },
    {
      "tags": [
        "Sunset",
        "Person",
        "Woman",
        "Meadow"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/15.jpg",
      "price": 10.99,
      "name": "Intelligent Sunset Tech",
      "description": "qui ipsa hic voluptas et rem sed architecto reiciendis labore saepe fugit ab sed sed quos ut adipisci accusantium molestias"
    },
    {
      "tags": [
        "Person",
        "Coffee"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/16.jpg",
      "price": 11.99,
      "name": "Unbranded Coffee Tech",
      "description": "soluta eligendi harum quis molestiae omnis excepturi deserunt sed dolorum dolorum ea non dolor"
    },
    {
      "tags": [
        "Trees",
        "Road"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/17.jpg",
      "price": 9.99,
      "name": "Rustic Road Tech",
      "description": "est ad ipsa et ipsum amet nemo cupiditate placeat praesentium qui illum harum"
    },
    {
      "tags": [
        "Windows",
        "Architecture",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/18.jpg",
      "price": 17.99,
      "name": "Sleek Building Tech",
      "description": "in cumque suscipit et perspiciatis minima ut et consequatur ab neque rerum hic dolore a aut dignissimos"
    },
    {
      "tags": [
        "House",
        "Trees",
        "Fog",
        "Secluded"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/19.jpg",
      "price": 20.99,
      "name": "Tasty Secluded Tech",
      "description": "non et omnis accusantium ut non voluptatem sunt iusto cumque laudantium sunt laboriosam et sequi et totam voluptatem aut vero occaecati quia laudantium"
    },
    {
      "tags": [
        "Architecture",
        "Wall"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/20.jpg",
      "price": 14.99,
      "name": "Ergonomic Architecture Tech",
      "description": "rerum sit voluptatibus sint voluptatem saepe delectus et quasi perferendis laborum et enim dolores quaerat iusto eos odio nisi"
    },
    {
      "tags": [
        "Surf",
        "Ocean",
        "Waves"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/21.jpg",
      "price": 12.99,
      "name": "Intelligent Waves Tech",
      "description": "architecto amet doloremque sit ut repudiandae ducimus rerum enim aut veniam autem aut ut ea consectetur est excepturi explicabo aliquid"
    },
    {
      "tags": [
        "Bike",
        "City",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/22.jpg",
      "price": 17.99,
      "name": "Intelligent City Tech",
      "description": "sit animi repellendus voluptas vitae consequatur accusantium optio cupiditate et"
    },
    {
      "tags": [
        "Sky",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/23.jpg",
      "price": 18.99,
      "name": "Refined Sky Tech",
      "description": "non est voluptatem sint nulla dicta iste natus consequatur accusantium dolores dolore in et distinctio dolore similique"
    },
    {
      "tags": [
        "Rust",
        "Machine",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/24.jpg",
      "price": 12.99,
      "name": "Incredible Car Tech",
      "description": "rerum vero cupiditate et est similique soluta ex sit ex esse repellat necessitatibus voluptatum corrupti et nihil quod"
    },
    {
      "tags": [
        "Animal",
        "Fur",
        "Monkey"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/25.jpg",
      "price": 15.99,
      "name": "Gorgeous Animal Tech",
      "description": "rerum consectetur magni sed enim eveniet et dolorem laudantium ut aut qui voluptatem praesentium soluta iste aliquid dolorem quibusdam veniam voluptas quaerat excepturi"
    },
    {
      "tags": [
        "Machine",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/26.jpg",
      "price": 13.99,
      "name": "Ergonomic Machine Tech",
      "description": "minus nihil ipsum explicabo pariatur adipisci harum quia ab et voluptate odio"
    },
    {
      "tags": [
        "Planes",
        "Sun",
        "Clouds"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/27.jpg",
      "price": 15.99,
      "name": "Licensed Clouds Tech",
      "description": "maiores esse culpa qui fuga dignissimos officia aliquid perferendis consequatur possimus accusantium"
    },
    {
      "tags": [
        "Beach",
        "Television",
        "Tv"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/28.jpg",
      "price": 11.99,
      "name": "Awesome Television Tech",
      "description": "tenetur perspiciatis necessitatibus eligendi perspiciatis et facilis expedita reiciendis et in corporis nostrum quam molestiae voluptatum soluta consequuntur nemo totam magnam doloremque adipisci architecto"
    },
    {
      "tags": [
        "Grass",
        "Meadow",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/29.jpg",
      "price": 11.99,
      "name": "Fantastic Grass Tech",
      "description": "quod voluptas porro animi et praesentium velit aperiam ut officiis ut praesentium perspiciatis quia iste molestias voluptas"
    },
    {
      "tags": [
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/30.jpg",
      "price": 13.99,
      "name": "Refined People Tech",
      "description": "sequi aliquam sapiente quibusdam fugit consequuntur voluptatum sint reprehenderit est mollitia voluptas consequatur similique quibusdam dolorem rerum quis"
    },
    {
      "tags": [
        "Beach",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/31.jpg",
      "price": 13.99,
      "name": "Practical Beach Tech",
      "description": "dolorum quam nulla assumenda harum expedita est animi possimus a quod repellendus doloribus quae a in praesentium ut voluptatem quae esse consectetur et"
    },
    {
      "tags": [
        "American",
        "Sky",
        "Patriotic",
        "Flag"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/32.jpg",
      "price": 13.99,
      "name": "Intelligent Patriotic Tech",
      "description": "perspiciatis quia animi maxime modi non molestiae ab voluptas modi molestias non et sed repudiandae iste accusamus autem"
    },
    {
      "tags": [
        "Desk",
        "Office",
        "Wood"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/33.jpg",
      "price": 16.99,
      "name": "Unbranded Office Tech",
      "description": "et qui sint modi expedita similique consequatur esse quis aliquam est aliquam architecto quidem rerum nihil"
    },
    {
      "tags": [
        "City",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/34.jpg",
      "price": 10.99,
      "name": "Awesome City Tech",
      "description": "sint voluptatem accusantium quae facilis ipsum numquam ut possimus eveniet quia autem repudiandae ipsa qui ratione molestiae id voluptatem sit"
    },
    {
      "tags": [
        "Techs",
        "Coffee",
        "Wood"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/35.jpg",
      "price": 9.99,
      "name": "Incredible Coffee Tech",
      "description": "mollitia nostrum sequi aperiam quia nostrum aliquam expedita sint sit voluptatibus incidunt officia illum est doloribus"
    },
    {
      "tags": [
        "Tree",
        "Plant",
        "Flowers"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/36.jpg",
      "price": 10.99,
      "name": "Gorgeous Tree Tech",
      "description": "ut enim et odit inventore sunt eos culpa incidunt laudantium magnam veniam sequi consequatur quia recusandae unde et incidunt quod et a"
    },
    {
      "tags": [
        "Metal",
        "Bridge",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/37.jpg",
      "price": 17.99,
      "name": "Fantastic Metal Tech",
      "description": "qui minima et quibusdam accusantium facere doloribus culpa rerum eum accusamus nam"
    },
    {
      "tags": [
        "Nature",
        "Ocean",
        "Hillside"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/38.jpg",
      "price": 14.99,
      "name": "Licensed Hillside Tech",
      "description": "ex corrupti vel esse perferendis non similique at quia voluptatem sit illo ut maiores et magni"
    },
    {
      "tags": [
        "Person",
        "Raindrops",
        "Hand"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/39.jpg",
      "price": 10.99,
      "name": "Intelligent Person Tech",
      "description": "necessitatibus voluptas rerum ea ea pariatur aut enim nam voluptas voluptatem maxime dignissimos"
    },
    {
      "tags": [
        "Snow",
        "Chair lift",
        "Ski",
        "Snowboard",
        "Mountain"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/40.jpg",
      "price": 17.99,
      "name": "Small Snow Tech",
      "description": "laboriosam delectus accusamus aut aspernatur optio natus necessitatibus eos voluptas ut excepturi alias qui non et dolor in sint esse reprehenderit veniam consequatur"
    },
    {
      "tags": [
        "Ocean",
        "Waves"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/41.jpg",
      "price": 17.99,
      "name": "Intelligent Waves Tech",
      "description": "aliquam odit iure porro facere ea adipisci laboriosam eligendi qui commodi officiis quia beatae dolorem ducimus aut et"
    },
    {
      "tags": [
        "Snow",
        "Person",
        "Reflection"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/42.jpg",
      "price": 12.99,
      "name": "Licensed Person Tech",
      "description": "inventore ut dolores facilis soluta excepturi necessitatibus saepe et expedita omnis omnis nihil eos dignissimos harum sequi aliquid sed voluptatem illum porro"
    },
    {
      "tags": [
        "Buildings",
        "City"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/43.jpg",
      "price": 20.99,
      "name": "Handcrafted City Tech",
      "description": "omnis nemo nisi praesentium cumque a est dolore distinctio porro asperiores ut non officia hic aut velit deleniti et nihil"
    },
    {
      "tags": [
        "Bridge",
        "City"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/44.jpg",
      "price": 15.99,
      "name": "Intelligent Bridge Tech",
      "description": "molestiae nostrum aliquid odit omnis id perspiciatis iure ut aperiam suscipit dolores"
    },
    {
      "tags": [
        "Architecture",
        "Italy",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/45.jpg",
      "price": 19.99,
      "name": "Refined Building Tech",
      "description": "et dolorum rerum provident nobis ipsam delectus qui et cupiditate est aut et"
    },
    {
      "tags": [
        "Sky",
        "Night",
        "Stars"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/46.jpg",
      "price": 18.99,
      "name": "Practical Stars Tech",
      "description": "fugit facere facilis laborum rerum culpa nulla nesciunt et ex error unde"
    },
    {
      "tags": [
        "Fog",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/47.jpg",
      "price": 10.99,
      "name": "Small Forest Tech",
      "description": "doloribus est odio nam magnam sed alias vitae sed non voluptates necessitatibus optio id voluptatem laborum aperiam quia est mollitia repellat accusamus"
    },
    {
      "tags": [
        "Surf",
        "Ocean",
        "Waves"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/48.jpg",
      "price": 19.99,
      "name": "Fantastic Ocean Tech",
      "description": "et blanditiis sit consequatur sit quos vero nesciunt quas possimus deleniti dolor voluptatem laborum"
    },
    {
      "tags": [
        "Flowers",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/49.jpg",
      "price": 13.99,
      "name": "Fantastic Flowers Tech",
      "description": "sit autem voluptas quo magni exercitationem aliquam adipisci amet earum et voluptate aut modi veritatis totam enim nam provident est"
    },
    {
      "tags": [
        "Sunset",
        "Wave",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/50.jpg",
      "price": 9.99,
      "name": "Fantastic Sunset Tech",
      "description": "eveniet animi fugit eligendi nihil quod eum officiis atque ad eum et aliquid odio sunt saepe similique non id esse accusantium in quas eius"
    },
    {
      "tags": [
        "Snow",
        "Fog",
        "Mountains",
        "Bird"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/51.jpg",
      "price": 16.99,
      "name": "Awesome Fog Tech",
      "description": "rerum et eveniet sed ea voluptatem quod minus ea eum labore et quia possimus error et quaerat"
    },
    {
      "tags": [
        "Snow",
        "Trees",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/52.jpg",
      "price": 13.99,
      "name": "Fantastic Snow Tech",
      "description": "eos ipsa consequatur accusantium voluptate iste odit totam voluptates voluptatem mollitia atque et eum tempore rerum vel voluptatem commodi"
    },
    {
      "tags": [
        "Ocean",
        "Buildings"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/53.jpg",
      "price": 14.99,
      "name": "Handcrafted Ocean Tech",
      "description": "laboriosam ab incidunt excepturi at maxime numquam nihil placeat ipsa sequi accusamus quam et ut rerum"
    },
    {
      "tags": [
        "Park",
        "Swings"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/54.jpg",
      "price": 16.99,
      "name": "Rustic Swings Tech",
      "description": "animi qui possimus molestiae voluptas architecto eius aut commodi error ea facilis ut"
    },
    {
      "tags": [
        "Flowers"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/55.jpg",
      "price": 16.99,
      "name": "Licensed Flowers Tech",
      "description": "consequatur molestiae voluptates quia ut accusantium totam voluptatibus est ut asperiores rerum sed nisi debitis nam facere aperiam itaque"
    },
    {
      "tags": [
        "Fog",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/56.jpg",
      "price": 14.99,
      "name": "Small Fog Tech",
      "description": "ut voluptates ut qui recusandae in maiores in magni iure optio omnis incidunt ea ducimus non rem ex quia dolorem in est impedit"
    },
    {
      "tags": [
        "Animals",
        "Meadow",
        "Cows"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/57.jpg",
      "price": 10.99,
      "name": "Rustic Cows Tech",
      "description": "voluptatibus corrupti quia quis debitis rerum nihil occaecati iste maxime quas molestiae perspiciatis accusamus deserunt inventore reiciendis error"
    },
    {
      "tags": [
        "Lights",
        "Night",
        "City",
        "Phonebooth"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/58.jpg",
      "price": 13.99,
      "name": "Awesome Night Tech",
      "description": "repellat sapiente ut atque unde in iure consequatur fuga mollitia ex"
    },
    {
      "tags": [
        "Snow",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/59.jpg",
      "price": 19.99,
      "name": "Ergonomic Mountains Tech",
      "description": "atque deleniti adipisci rerum tempora rerum et totam nisi aspernatur animi nostrum natus sint adipisci id dolorem et et"
    },
    {
      "tags": [
        "Fog",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/60.jpg",
      "price": 12.99,
      "name": "Refined Fog Tech",
      "description": "quas consequatur voluptatibus amet distinctio debitis et voluptatem cumque dolor quae laudantium illum et"
    },
    {
      "tags": [
        "Castle"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/61.jpg",
      "price": 12.99,
      "name": "Sleek Castle Tech",
      "description": "sunt consequatur nulla ea eaque sunt ipsum ut reiciendis non adipisci ratione et est maxime explicabo necessitatibus possimus natus est numquam nobis vero"
    },
    {
      "tags": [
        "City",
        "Architecture",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/62.jpg",
      "price": 20.99,
      "name": "Small City Tech",
      "description": "qui vel in voluptas incidunt nulla ut ad iure eligendi autem facilis ea earum aut beatae"
    },
    {
      "tags": [
        "Bridge",
        "Fog",
        "City"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/63.jpg",
      "price": 12.99,
      "name": "Handcrafted Bridge Tech",
      "description": "necessitatibus molestiae quam eveniet et et quia nihil distinctio qui non placeat corporis unde dignissimos et sint itaque sit eum voluptates voluptatem atque veritatis est"
    },
    {
      "tags": [
        "Ocean",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/64.jpg",
      "price": 13.99,
      "name": "Awesome Ocean Tech",
      "description": "laborum expedita esse aut aut culpa rerum dolorem odit culpa eligendi vitae deleniti soluta aut quas beatae maiores et"
    },
    {
      "tags": [
        "Animal",
        "Wolf",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/65.jpg",
      "price": 19.99,
      "name": "Intelligent Animal Tech",
      "description": "debitis suscipit quis fuga animi consequatur temporibus non sit cumque iusto"
    },
    {
      "tags": [
        "Forest",
        "Road",
        "Trees"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/66.jpg",
      "price": 17.99,
      "name": "Licensed Forest Tech",
      "description": "ipsa sed et quia consequatur autem aut dolores assumenda distinctio consequatur omnis ut ex minima consequatur sed veritatis"
    },
    {
      "tags": [
        "Sky",
        "Abstract",
        "Buildings"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/67.jpg",
      "price": 14.99,
      "name": "Intelligent Abstract Tech",
      "description": "aperiam pariatur sit atque excepturi rerum hic omnis laborum ut illo doloremque quibusdam sequi aut minus hic placeat modi"
    },
    {
      "tags": [
        "Snow",
        "Trees",
        "Macro"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/68.jpg",
      "price": 11.99,
      "name": "Tasty Snow Tech",
      "description": "dolores esse est eos in sequi qui error fugit est laborum occaecati quidem culpa natus voluptatem asperiores"
    },
    {
      "tags": [
        "Sand",
        "Desert"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/69.jpg",
      "price": 9.99,
      "name": "Refined Sand Tech",
      "description": "ea illo omnis sed ut voluptatem et et magni et sint ex distinctio"
    },
    {
      "tags": [
        "Central Park",
        "City",
        "Buildings",
        "New York"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/70.jpg",
      "price": 15.99,
      "name": "Generic New York Tech",
      "description": "necessitatibus repudiandae delectus aut assumenda porro harum eos voluptas quos odio doloremque exercitationem qui incidunt numquam velit tempore aut eos nulla"
    },
    {
      "tags": [
        "Trees",
        "Meadow",
        "Flowers"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/71.jpg",
      "price": 18.99,
      "name": "Sleek Flowers Tech",
      "description": "velit ut quo autem repellat libero incidunt est animi qui sunt eum consequuntur soluta natus eveniet aspernatur est molestiae iure"
    },
    {
      "tags": [
        "Sunset"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/72.jpg",
      "price": 12.99,
      "name": "Small Sunset Tech",
      "description": "dolorem blanditiis quas quaerat aliquam nostrum nostrum qui sint sit ut molestias quo beatae aut dolore"
    },
    {
      "tags": [
        "Sunset",
        "Ocean",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/73.jpg",
      "price": 16.99,
      "name": "Incredible Ocean Tech",
      "description": "nobis et amet maxime qui neque reprehenderit accusamus similique sed quia debitis quia odio assumenda nulla necessitatibus cum qui enim"
    },
    {
      "tags": [
        "Trees",
        "Sunrise",
        "Meadow"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/74.jpg",
      "price": 16.99,
      "name": "Ergonomic Meadow Tech",
      "description": "in corrupti quasi ducimus inventore aut repellat praesentium debitis qui amet itaque quasi quisquam"
    },
    {
      "tags": [
        "Forest",
        "Trees",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/75.jpg",
      "price": 20.99,
      "name": "Gorgeous Trees Tech",
      "description": "consequatur enim alias voluptatem et et omnis sunt qui et rerum qui quae voluptates cum"
    },
    {
      "tags": [
        "Pool",
        "Person",
        "Water",
        "Swimming"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/76.jpg",
      "price": 9.99,
      "name": "Handmade Pool Tech",
      "description": "voluptate ducimus est praesentium perspiciatis et non id ipsa totam"
    },
    {
      "tags": [
        "Green beans",
        "Vegetables",
        "Food"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/77.jpg",
      "price": 14.99,
      "name": "Fantastic Green Beans Tech",
      "description": "id nihil maiores doloremque expedita alias enim laudantium odio ad maiores nulla earum aut"
    },
    {
      "tags": [
        "Mountains",
        "Water",
        "Clouds"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/78.jpg",
      "price": 15.99,
      "name": "Handcrafted Mountains Tech",
      "description": "autem aut atque inventore rerum est soluta maxime unde occaecati ut omnis corporis enim animi qui"
    },
    {
      "tags": [
        "Station",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/79.jpg",
      "price": 16.99,
      "name": "Generic Station Tech",
      "description": "velit aut nulla explicabo magnam quis reiciendis incidunt minima et aut provident quod nostrum"
    },
    {
      "tags": [
        "Buildings",
        "Architecture"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/80.jpg",
      "price": 20.99,
      "name": "Refined Buildings Tech",
      "description": "eos qui reprehenderit sed voluptatem et neque saepe commodi rem et praesentium distinctio atque dignissimos quas eos doloribus veritatis est in consequatur nostrum"
    },
    {
      "tags": [
        "City",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/81.jpg",
      "price": 20.99,
      "name": "Incredible People Tech",
      "description": "quas neque quia ut facilis deleniti qui minus iure velit non veritatis nemo amet nobis dolorem"
    },
    {
      "tags": [
        "Sunset",
        "Fog",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/82.jpg",
      "price": 13.99,
      "name": "Ergonomic Mountains Tech",
      "description": "aliquid libero laudantium aut officiis id voluptatem beatae molestiae aspernatur quisquam doloribus eum pariatur et"
    },
    {
      "tags": [
        "Flower",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/83.jpg",
      "price": 19.99,
      "name": "Generic Flower Tech",
      "description": "optio nesciunt id deserunt autem veniam est explicabo facere voluptas omnis illo necessitatibus nihil"
    },
    {
      "tags": [
        "Sunset",
        "Hands",
        "Phone"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/84.jpg",
      "price": 12.99,
      "name": "Ergonomic Sunset Tech",
      "description": "aliquid officia est quis illum aspernatur quae provident ut velit quia nihil consequuntur perspiciatis provident voluptas"
    },
    {
      "tags": [
        "Sunset",
        "Airplane",
        "Clouds"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/85.jpg",
      "price": 15.99,
      "name": "Fantastic Sunset Tech",
      "description": "amet vitae labore minima dolore sed maxime quisquam voluptatem deserunt sed eveniet"
    },
    {
      "tags": [
        "Animal",
        "Deer"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/86.jpg",
      "price": 19.99,
      "name": "Incredible Deer Tech",
      "description": "distinctio nostrum quia sit illum ipsa quidem non et totam voluptate sit quidem tempora voluptas non possimus et tenetur enim dolorem quod"
    },
    {
      "tags": [
        "Animal",
        "Bird"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/87.jpg",
      "price": 12.99,
      "name": "Practical Bird Tech",
      "description": "nam reiciendis explicabo ut illo sequi velit beatae doloribus maxime consequatur debitis consequatur fugiat natus est quisquam"
    },
    {
      "tags": [
        "Sunset",
        "Train",
        "Railroad",
        "Freeway"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/88.jpg",
      "price": 9.99,
      "name": "Sleek Railroad Tech",
      "description": "laboriosam ut et tempore unde esse consequatur architecto corporis quaerat et ad eum et possimus at dolores placeat recusandae ut laborum soluta"
    },
    {
      "tags": [
        "House",
        "Pool"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/89.jpg",
      "price": 11.99,
      "name": "Rustic Pool Tech",
      "description": "rerum tempora veritatis harum voluptas dignissimos minus voluptates eum labore in ipsum odio"
    },
    {
      "tags": [
        "Architecture",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/90.jpg",
      "price": 14.99,
      "name": "Awesome Building Tech",
      "description": "quos dolor alias ipsum asperiores et tenetur voluptatum ipsum similique"
    },
    {
      "tags": [
        "Space",
        "NASA"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/91.jpg",
      "price": 16.99,
      "name": "Tasty NASA Tech",
      "description": "et ratione illum fugiat sapiente voluptatibus sapiente velit voluptatem debitis eos rerum ea tempore culpa nihil consectetur nobis sapiente quae quo est consequatur"
    },
    {
      "tags": [
        "Animal",
        "Mountains",
        "Lake"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/92.jpg",
      "price": 18.99,
      "name": "Handcrafted Lake Tech",
      "description": "atque fugiat aut laboriosam dolor error dignissimos neque voluptates occaecati cumque perspiciatis sint odio dicta repudiandae et fuga porro"
    },
    {
      "tags": [
        "Animal",
        "Bird",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/93.jpg",
      "price": 10.99,
      "name": "Unbranded Water Tech",
      "description": "dolor eveniet rerum ut enim aliquid hic nostrum mollitia laboriosam eum rerum quis voluptate"
    },
    {
      "tags": [
        "Winter",
        "Snow",
        "Trees",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/94.jpg",
      "price": 17.99,
      "name": "Small Snow Tech",
      "description": "fugiat vero qui nobis id excepturi tempora quis dolor voluptates voluptas similique distinctio optio ad id ab vero voluptatem"
    },
    {
      "tags": [
        "Sky",
        "Mountains",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/95.jpg",
      "price": 15.99,
      "name": "Ergonomic Sky Tech",
      "description": "similique ea beatae fuga enim velit inventore hic nulla ullam velit non consequatur consequatur illo provident"
    },
    {
      "tags": [
        "Statue of liberty",
        "Architecture",
        "Monument"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/96.jpg",
      "price": 20.99,
      "name": "Refined Statue Of Liberty Tech",
      "description": "et odit hic blanditiis ipsa ullam quo debitis amet non facere eos maiores qui sit facilis est nihil in facere sed velit"
    },
    {
      "tags": [
        "Rust",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/97.jpg",
      "price": 16.99,
      "name": "Small Rust Tech",
      "description": "soluta enim molestiae aut et reprehenderit illo expedita neque eligendi consequatur illo mollitia"
    },
    {
      "tags": [
        "Married",
        "Wedding",
        "Bride"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/98.jpg",
      "price": 16.99,
      "name": "Tasty Married Tech",
      "description": "quaerat minima maxime ut quo ipsam facere recusandae numquam ipsum qui ut esse quod pariatur alias"
    },
    {
      "tags": [
        "Plants",
        "Cactus"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/99.jpg",
      "price": 17.99,
      "name": "Unbranded Plants Tech",
      "description": "dignissimos nesciunt odio doloremque vel ut id consequatur eligendi dolorem blanditiis"
    },
    {
      "tags": [
        "Ocean",
        "Dock"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/100.jpg",
      "price": 15.99,
      "name": "Unbranded Ocean Tech",
      "description": "minima et ipsum explicabo ut veniam tenetur nesciunt velit recusandae suscipit animi facere voluptatem optio nesciunt"
    },
    {
      "tags": [
        "Nature",
        "Mountains",
        "Meadow"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/101.jpg",
      "price": 17.99,
      "name": "Generic Mountains Tech",
      "description": "est quia expedita velit quibusdam est nam excepturi officiis quas"
    },
    {
      "tags": [
        "Northern lights",
        "Snow",
        "Night"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/102.jpg",
      "price": 18.99,
      "name": "Handcrafted Night Tech",
      "description": "quo dolores quo libero dolores maiores sed sed libero ut animi voluptatem fuga accusamus cum"
    },
    {
      "tags": [
        "Sunset",
        "Field",
        "Person"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/103.jpg",
      "price": 19.99,
      "name": "Licensed Sunset Tech",
      "description": "quidem officiis voluptas omnis accusantium consectetur assumenda at ut occaecati blanditiis possimus id"
    },
    {
      "tags": [
        "Fog",
        "Mountains",
        "Lake"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/104.jpg",
      "price": 17.99,
      "name": "Gorgeous Mountains Tech",
      "description": "beatae autem ex nulla nisi occaecati quis et minus commodi omnis tempore illo deleniti"
    },
    {
      "tags": [
        "Clothing",
        "Person"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/105.jpg",
      "price": 17.99,
      "name": "Awesome Person Tech",
      "description": "rerum soluta voluptatem facere cum sit est et quas dolores illo quia dolores"
    },
    {
      "tags": [
        "Hands",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/106.jpg",
      "price": 10.99,
      "name": "Ergonomic People Tech",
      "description": "ratione qui id ut excepturi eaque maiores qui aperiam et quis voluptatum aut impedit ducimus provident voluptate quia"
    },
    {
      "tags": [
        "Trees",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/107.jpg",
      "price": 19.99,
      "name": "Licensed Mountains Tech",
      "description": "consequatur ipsam id perferendis praesentium quia quod blanditiis facere animi dolorum tempora quidem sint voluptatum exercitationem modi qui exercitationem esse sunt"
    },
    {
      "tags": [
        "Snow",
        "Trees",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/108.jpg",
      "price": 19.99,
      "name": "Handcrafted Snow Tech",
      "description": "neque corporis quidem qui iste delectus sunt et ipsa vero iste dolores quibusdam non id recusandae molestiae consequatur voluptas eligendi et eius rerum eius commodi"
    },
    {
      "tags": [
        "Trees",
        "Mountains",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/109.jpg",
      "price": 11.99,
      "name": "Small Forest Tech",
      "description": "voluptates dicta vel praesentium fuga dolores ratione rerum maiores sapiente tempora dolor et asperiores porro harum ratione quia exercitationem aut quas aut"
    },
    {
      "tags": [
        "Plant",
        "Flower",
        "Macro"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/110.jpg",
      "price": 12.99,
      "name": "Ergonomic Macro Tech",
      "description": "rerum fuga magnam alias eveniet non velit nesciunt vitae placeat dolores delectus itaque modi ipsa magnam cum"
    },
    {
      "tags": [
        "Person",
        "Woman",
        "Desert"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/111.jpg",
      "price": 10.99,
      "name": "Gorgeous Woman Tech",
      "description": "doloremque architecto ducimus sit nemo voluptatem dolor vel ratione sed quis nostrum et voluptatem quisquam nihil labore recusandae quas nisi rem sit"
    },
    {
      "tags": [
        "Mountain",
        "Sunset",
        "Forrest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/112.jpg",
      "price": 13.99,
      "name": "Fantastic Sunset Tech",
      "description": "totam quis deserunt dicta recusandae fugiat sapiente voluptatem est quidem ut in nulla sunt officiis"
    },
    {
      "tags": [
        "Jelly fish",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/113.jpg",
      "price": 16.99,
      "name": "Intelligent Ocean Tech",
      "description": "quis consectetur tenetur et non illo aut consequatur rerum maiores quasi iusto qui occaecati amet rerum culpa vel earum quasi dolor accusamus"
    },
    {
      "tags": [
        "Flora",
        "Flowers"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/114.jpg",
      "price": 20.99,
      "name": "Sleek Flora Tech",
      "description": "iure sint porro dolores enim ipsam aliquam quam expedita harum culpa totam et tempora et quae vitae rerum dolorum quo quo tempore"
    },
    {
      "tags": [
        "City",
        "Buildings"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/115.jpg",
      "price": 19.99,
      "name": "Incredible City Tech",
      "description": "accusantium sequi sed consequatur id optio vitae aut ullam voluptatum temporibus cupiditate alias numquam explicabo sit doloribus ut consequatur ab illum et maxime et"
    },
    {
      "tags": [
        "Sunset",
        "Ocean",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/116.jpg",
      "price": 15.99,
      "name": "Generic Sunset Tech",
      "description": "quis explicabo fuga minus et voluptate ut dolorum facilis cupiditate aperiam earum unde"
    },
    {
      "tags": [
        "Ocean",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/117.jpg",
      "price": 14.99,
      "name": "Refined Plants Tech",
      "description": "porro provident pariatur autem non deserunt quia consequatur voluptatibus ut quia et"
    },
    {
      "tags": [
        "Trees",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/118.jpg",
      "price": 19.99,
      "name": "Tasty Mountains Tech",
      "description": "qui voluptatem harum enim veniam quod corporis id quisquam doloribus repellat odit ipsum veritatis aut blanditiis rerum fugiat et ea soluta laborum in"
    },
    {
      "tags": [
        "Fog",
        "Stairs"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/119.jpg",
      "price": 15.99,
      "name": "Fantastic Stairs Tech",
      "description": "eum excepturi sed explicabo necessitatibus sequi ab odio minus ratione harum ut praesentium tempore recusandae"
    },
    {
      "tags": [
        "Person",
        "Stars",
        "Space"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/120.jpg",
      "price": 20.99,
      "name": "Handcrafted Stars Tech",
      "description": "et sit consequatur unde ut sunt autem neque necessitatibus et id aut id occaecati est a esse doloribus debitis consequuntur excepturi enim velit tenetur"
    },
    {
      "tags": [
        "Trees",
        "Sunrise",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/121.jpg",
      "price": 14.99,
      "name": "Tasty Forest Tech",
      "description": "numquam distinctio fugiat nam est possimus velit est quam dolores quibusdam esse autem qui temporibus mollitia architecto nisi vel est et veniam et"
    },
    {
      "tags": [
        "Snow",
        "Nature",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/122.jpg",
      "price": 18.99,
      "name": "Sleek Nature Tech",
      "description": "id eius nostrum accusamus optio itaque ut quisquam delectus ut voluptatem accusamus aperiam"
    },
    {
      "tags": [
        "Abstract",
        "Fabric",
        "Antler"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/123.jpg",
      "price": 16.99,
      "name": "Rustic Antler Tech",
      "description": "aut temporibus dolorem rem alias optio nobis aut hic quasi rerum dolore sunt debitis"
    },
    {
      "tags": [
        "Mountain",
        "Snow"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/124.jpg",
      "price": 20.99,
      "name": "Gorgeous Mountain Tech",
      "description": "quod quia sed autem molestias et sapiente nobis quidem cumque laborum sint corporis ratione"
    },
    {
      "tags": [
        "City",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/125.jpg",
      "price": 18.99,
      "name": "Practical City Tech",
      "description": "voluptas dicta sit in tempore enim voluptas asperiores autem temporibus voluptas est porro omnis dicta ad est et cupiditate harum optio"
    },
    {
      "tags": [
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/126.jpg",
      "price": 10.99,
      "name": "Handcrafted Mountains Tech",
      "description": "in est dolorem qui qui velit fuga hic veniam recusandae delectus ullam nesciunt voluptates distinctio recusandae"
    },
    {
      "tags": [
        "Sky",
        "Clouds"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/127.jpg",
      "price": 16.99,
      "name": "Generic Clouds Tech",
      "description": "nihil commodi delectus vitae eius distinctio velit et laudantium eos consectetur commodi nisi eveniet"
    },
    {
      "tags": [
        "Mountain",
        "Trees",
        "Mist",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/128.jpg",
      "price": 13.99,
      "name": "Refined Fog Tech",
      "description": "qui dolores voluptatem autem atque magnam qui vel ut quo harum labore exercitationem dolorem dolore numquam ut aut voluptas"
    },
    {
      "tags": [
        "Dog",
        "Animal"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/129.jpg",
      "price": 17.99,
      "name": "Awesome Dog Tech",
      "description": "at doloremque natus similique quo labore quisquam laudantium placeat quasi vero cumque sit dolores quis eos dolor sint neque dolores voluptatem qui et sed vero"
    },
    {
      "tags": [
        "Trees",
        "Road",
        "Trail"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/130.jpg",
      "price": 16.99,
      "name": "Awesome Trail Tech",
      "description": "officia deserunt necessitatibus dignissimos aliquam perferendis quis sunt dicta quod rem recusandae aut eaque nulla maiores quisquam et excepturi voluptate consequatur deserunt impedit adipisci ducimus"
    },
    {
      "tags": [
        "Cup",
        "Bed"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/131.jpg",
      "price": 14.99,
      "name": "Rustic Bed Tech",
      "description": "minima distinctio non illo vel necessitatibus totam esse est fugiat tempora quia qui et sit assumenda et ipsum consequatur"
    },
    {
      "tags": [
        "Dock",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/132.jpg",
      "price": 11.99,
      "name": "Fantastic Dock Tech",
      "description": "blanditiis voluptatem aliquam fugit aut voluptates ducimus molestias sit sapiente omnis"
    },
    {
      "tags": [
        "Road"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/133.jpg",
      "price": 11.99,
      "name": "Handcrafted Road Tech",
      "description": "reprehenderit velit odit corrupti alias dolore esse qui et reiciendis"
    },
    {
      "tags": [
        "Trees",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/134.jpg",
      "price": 11.99,
      "name": "Unbranded Trees Tech",
      "description": "culpa dignissimos sit iste sed et quis vitae facere sunt aliquid voluptatem voluptatem est eos aperiam adipisci modi ut vitae explicabo veniam"
    },
    {
      "tags": [
        "Arial",
        "Farms"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/135.jpg",
      "price": 14.99,
      "name": "Handcrafted Arial Tech",
      "description": "excepturi qui est officia consequatur sunt eos dolore est occaecati officiis corporis hic sapiente reprehenderit eaque consequatur qui doloribus omnis quo provident aperiam officia"
    },
    {
      "tags": [
        "Cliff",
        "Lighthouse",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/136.jpg",
      "price": 19.99,
      "name": "Tasty Ocean Tech",
      "description": "debitis et ut non repudiandae voluptas reiciendis labore natus non ut cumque et dolores temporibus blanditiis natus et quis veniam quo"
    },
    {
      "tags": [
        "Bridge",
        "Night"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/137.jpg",
      "price": 10.99,
      "name": "Handcrafted Night Tech",
      "description": "dolorum cumque vel at vel nam id enim repellat consequatur aut et fuga"
    },
    {
      "tags": [
        "Sunset",
        "City",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/138.jpg",
      "price": 19.99,
      "name": "Handcrafted City Tech",
      "description": "veritatis asperiores et aut voluptatibus eveniet maxime voluptatem ea dolores laborum aut qui ut ullam quaerat repellat"
    },
    {
      "tags": [
        "Beach",
        "Grass",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/139.jpg",
      "price": 11.99,
      "name": "Handmade Beach Tech",
      "description": "et enim est esse fugiat et totam vero dolores rem debitis qui commodi et doloremque vel quaerat sequi atque"
    },
    {
      "tags": [
        "Plant",
        "Table",
        "Blue"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/140.jpg",
      "price": 13.99,
      "name": "Ergonomic Table Tech",
      "description": "amet asperiores minus inventore voluptas harum laudantium qui ullam eligendi ab fuga neque asperiores vel vel impedit quaerat aliquid nulla quod"
    },
    {
      "tags": [
        "Valley",
        "Fog",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/141.jpg",
      "price": 20.99,
      "name": "Ergonomic Mountains Tech",
      "description": "aliquam blanditiis illum illum voluptate ut nemo ullam praesentium voluptatum et fugit maiores doloremque quidem assumenda"
    },
    {
      "tags": [
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/142.jpg",
      "price": 17.99,
      "name": "Handcrafted Mountains Tech",
      "description": "reprehenderit aliquid ipsum et aliquid ut vero et porro a odio quidem nam ipsum et dignissimos vel quo ipsam et consequatur nisi eaque explicabo"
    },
    {
      "tags": [
        "Sunset",
        "Lights",
        "City",
        "Buildings",
        "River"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/143.jpg",
      "price": 20.99,
      "name": "Ergonomic Lights Tech",
      "description": "nemo et praesentium hic sit perspiciatis autem fuga laborum ratione saepe autem voluptatem aut enim nihil est"
    },
    {
      "tags": [
        "Person",
        "Classic",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/144.jpg",
      "price": 18.99,
      "name": "Licensed Classic Tech",
      "description": "commodi quo exercitationem sed at assumenda dignissimos autem et odit animi architecto necessitatibus incidunt quo"
    },
    {
      "tags": [
        "Fog",
        "Ocean",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/145.jpg",
      "price": 9.99,
      "name": "Refined Fog Tech",
      "description": "pariatur animi velit sed nam qui voluptatum pariatur qui assumenda eos"
    },
    {
      "tags": [
        "Trees",
        "Meadow",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/146.jpg",
      "price": 10.99,
      "name": "Sleek Meadow Tech",
      "description": "itaque rerum facere consequuntur rem architecto doloremque quasi quam consequuntur aut dolore sint sit ut"
    },
    {
      "tags": [
        "Beach",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/147.jpg",
      "price": 17.99,
      "name": "Handcrafted Beach Tech",
      "description": "aut rerum consequatur vitae quidem rerum earum est magni officiis consectetur qui doloremque qui placeat dolore inventore voluptas enim ex ratione"
    },
    {
      "tags": [
        "Sunset",
        "City",
        "Buildings",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/148.jpg",
      "price": 17.99,
      "name": "Incredible People Tech",
      "description": "facere sint ut aut est non et libero omnis nam nisi nihil libero voluptatem in rem et dolorem sunt quisquam saepe repellendus"
    },
    {
      "tags": [
        "Chairs",
        "Office",
        "Table"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/149.jpg",
      "price": 12.99,
      "name": "Generic Chairs Tech",
      "description": "labore deleniti sapiente perspiciatis ut assumenda neque ad officiis est suscipit quaerat voluptas magnam delectus reprehenderit nisi nam voluptatibus aperiam"
    },
    {
      "tags": [
        "Snow",
        "Alaska"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/150.jpg",
      "price": 19.99,
      "name": "Fantastic Snow Tech",
      "description": "dolorem voluptatem voluptatem aut et eveniet voluptatem aperiam id in laboriosam voluptatem eveniet a aliquid voluptatem officia earum necessitatibus qui eligendi aut consequuntur error"
    },
    {
      "tags": [
        "Beach",
        "Nature",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/151.jpg",
      "price": 18.99,
      "name": "Small Beach Tech",
      "description": "qui inventore error ad eveniet quisquam non non nesciunt exercitationem dolore sit voluptate nihil"
    },
    {
      "tags": [
        "Brick"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/152.jpg",
      "price": 18.99,
      "name": "Handcrafted Brick Tech",
      "description": "et doloremque quia voluptas reiciendis rerum quasi ullam odit ex velit a in modi quisquam sed repellendus enim veritatis beatae commodi ut"
    },
    {
      "tags": [
        "Coffee"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/153.jpg",
      "price": 20.99,
      "name": "Generic Coffee Tech",
      "description": "ipsum consectetur ad optio sunt sit laborum sed aut labore consequatur sed quia et vitae"
    },
    {
      "tags": [
        "Glass",
        "Architecture",
        "Ceiling"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/154.jpg",
      "price": 9.99,
      "name": "Handcrafted Ceiling Tech",
      "description": "eius qui tempora assumenda ut id qui voluptas aspernatur et voluptatem veniam"
    },
    {
      "tags": [
        "River",
        "Snow",
        "Person",
        "Valley"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/155.jpg",
      "price": 12.99,
      "name": "Unbranded Valley Tech",
      "description": "laborum nihil non ut dolorum fugiat atque aperiam sit a quis eaque dolores nihil ipsa ex excepturi et omnis et dolor et"
    },
    {
      "tags": [
        "Arial",
        "Trees"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/156.jpg",
      "price": 10.99,
      "name": "Handmade Trees Tech",
      "description": "aliquid voluptatem et enim voluptas non mollitia provident non quam repellat occaecati eaque doloribus et magnam sit aperiam ut"
    },
    {
      "tags": [
        "City",
        "Buildings",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/157.jpg",
      "price": 20.99,
      "name": "Small Buildings Tech",
      "description": "tempora eligendi nihil quasi velit dolorem et deleniti alias et quae reiciendis dolorem qui ex earum et autem"
    },
    {
      "tags": [
        "Snow",
        "Trees",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/158.jpg",
      "price": 13.99,
      "name": "Handmade Snow Tech",
      "description": "non sed excepturi culpa aut sit dolor qui reiciendis perspiciatis"
    },
    {
      "tags": [
        "Statue of libery",
        "Monument"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/159.jpg",
      "price": 11.99,
      "name": "Ergonomic Monument Tech",
      "description": "vero dolor sed culpa molestias repellat quo provident expedita totam eos est quis laudantium expedita nobis quis"
    },
    {
      "tags": [
        "Trees",
        "Fog",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/160.jpg",
      "price": 13.99,
      "name": "Sleek Mountains Tech",
      "description": "consectetur at quis et quam vel cumque blanditiis quis rerum sit rerum corrupti voluptas qui itaque reprehenderit voluptatem nostrum voluptatem at"
    },
    {
      "tags": [
        "Sky",
        "Island",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/161.jpg",
      "price": 13.99,
      "name": "Fantastic Sky Tech",
      "description": "repudiandae magni qui esse labore magni maiores unde ullam itaque maxime aut"
    },
    {
      "tags": [
        "Flora",
        "Nature",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/162.jpg",
      "price": 10.99,
      "name": "Unbranded Flora Tech",
      "description": "sit tenetur praesentium nam nostrum cum tempora maiores amet eveniet ex aliquid nobis repudiandae maxime illum voluptatum quo vero quia quidem laboriosam unde"
    },
    {
      "tags": [
        "Animal",
        "Bear"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/163.jpg",
      "price": 20.99,
      "name": "Small Animal Tech",
      "description": "reiciendis quaerat possimus cumque praesentium laboriosam animi natus molestiae quo aut qui eligendi quaerat quo qui et sed ducimus est inventore ut"
    },
    {
      "tags": [
        "Sunset",
        "City"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/164.jpg",
      "price": 20.99,
      "name": "Refined City Tech",
      "description": "commodi sequi quia tempore consequatur tempora ut fugit reprehenderit reiciendis quia ullam qui"
    },
    {
      "tags": [
        "Nature",
        "Mountains",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/165.jpg",
      "price": 10.99,
      "name": "Tasty Nature Tech",
      "description": "sint odio optio illum eos et est dolores perspiciatis velit sapiente ut reprehenderit quia ullam quas eaque dolores quo enim hic reprehenderit"
    },
    {
      "tags": [
        "Baby",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/166.jpg",
      "price": 12.99,
      "name": "Refined Baby Tech",
      "description": "enim perferendis placeat aut dicta et explicabo eligendi laudantium earum non quia error nostrum libero quas cupiditate voluptatem velit"
    },
    {
      "tags": [
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/167.jpg",
      "price": 16.99,
      "name": "Rustic Mountains Tech",
      "description": "doloribus distinctio aut culpa quas ut exercitationem aut dignissimos voluptas sit soluta magnam"
    },
    {
      "tags": [
        "City",
        "Buildings",
        "Architecture"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/168.jpg",
      "price": 11.99,
      "name": "Practical Architecture Tech",
      "description": "dolorem corrupti vel quis eveniet et unde non quos adipisci id voluptate"
    },
    {
      "tags": [
        "Snow",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/169.jpg",
      "price": 14.99,
      "name": "Licensed Snow Tech",
      "description": "magni libero ut et dolore qui aut eveniet a ut provident ut qui omnis cupiditate esse"
    },
    {
      "tags": [
        "Person",
        "Rain"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/170.jpg",
      "price": 11.99,
      "name": "Practical Rain Tech",
      "description": "adipisci quia in odit repellat cupiditate aut unde facilis dolorem accusantium laborum sit optio laboriosam facere"
    },
    {
      "tags": [
        "Boats",
        "Food",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/171.jpg",
      "price": 16.99,
      "name": "Generic People Tech",
      "description": "repudiandae cumque voluptatibus eum laudantium reprehenderit magni quidem dolorum culpa nobis"
    },
    {
      "tags": [
        "Desk",
        "Office",
        "Laptop"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/172.jpg",
      "price": 11.99,
      "name": "Handmade Desk Tech",
      "description": "accusantium qui rerum qui vel qui ut vitae veniam rerum"
    },
    {
      "tags": [
        "Sunset",
        "Meadow",
        "Wood"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/173.jpg",
      "price": 14.99,
      "name": "Handmade Wood Tech",
      "description": "amet fuga eius mollitia natus quos velit aliquam quia laboriosam"
    },
    {
      "tags": [
        "Lake",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/174.jpg",
      "price": 9.99,
      "name": "Practical Lake Tech",
      "description": "dolore magni deserunt cumque non qui qui consequatur quia et totam temporibus sunt et at quia beatae doloribus placeat est libero"
    },
    {
      "tags": [
        "Person",
        "Beach",
        "Fish"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/175.jpg",
      "price": 14.99,
      "name": "Incredible Person Tech",
      "description": "quo delectus quisquam fuga occaecati assumenda libero ipsam tempora totam minus id maxime similique debitis dicta non ea ad sed"
    },
    {
      "tags": [
        "Trees",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/176.jpg",
      "price": 13.99,
      "name": "Practical Trees Tech",
      "description": "sint animi aut itaque ut voluptatibus inventore quia magni sint est facere excepturi corporis sit sed autem assumenda unde blanditiis id illo ea vero"
    },
    {
      "tags": [
        "Beach",
        "Ocean",
        "Pier",
        "Dock"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/177.jpg",
      "price": 18.99,
      "name": "Awesome Pier Tech",
      "description": "quis incidunt facilis optio laborum laboriosam et eius dolorem commodi nihil amet"
    },
    {
      "tags": [
        "Space",
        "NASA"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/178.jpg",
      "price": 14.99,
      "name": "Generic NASA Tech",
      "description": "culpa id culpa rerum nostrum odio nemo id tempora aut quo sed veritatis eveniet eligendi"
    },
    {
      "tags": [
        "Beach",
        "Ocean",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/179.jpg",
      "price": 16.99,
      "name": "Incredible Ocean Tech",
      "description": "qui aut id dolor fugiat blanditiis qui occaecati unde rerum inventore corporis error nulla ut provident dolores animi"
    },
    {
      "tags": [
        "Beach",
        "Nature",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/180.jpg",
      "price": 11.99,
      "name": "Awesome Ocean Tech",
      "description": "iure et dicta nisi accusantium qui sed veritatis quia molestiae doloribus accusantium sed nostrum aliquam cumque quia porro non earum dolorum sequi quia assumenda libero"
    },
    {
      "tags": [
        "Pool",
        "Night",
        "Ocean",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/181.jpg",
      "price": 9.99,
      "name": "Refined Water Tech",
      "description": "ipsam ducimus velit tempore vitae enim voluptatem rem doloribus laboriosam quo quaerat"
    },
    {
      "tags": [
        "Trees",
        "Car",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/182.jpg",
      "price": 9.99,
      "name": "Tasty People Tech",
      "description": "dignissimos ut quae molestiae saepe nihil quod et odio corporis unde veritatis nemo molestiae quibusdam laudantium quia eos perferendis"
    },
    {
      "tags": [
        "Bus",
        "Transit",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/183.jpg",
      "price": 14.99,
      "name": "Tasty People Tech",
      "description": "cum et officia corrupti sequi perspiciatis maiores quo fugit nam pariatur sunt assumenda doloribus qui consequatur modi nemo voluptates magnam nisi"
    },
    {
      "tags": [
        "Arial",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/184.jpg",
      "price": 18.99,
      "name": "Handcrafted Arial Tech",
      "description": "dolorem consequuntur quisquam sequi quia vitae impedit quaerat similique sequi porro impedit nihil vitae vel natus non"
    },
    {
      "tags": [
        "Trees",
        "Beach"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/185.jpg",
      "price": 16.99,
      "name": "Tasty Trees Tech",
      "description": "est aliquid et autem quasi reiciendis sint illo aut accusantium dolorem et corrupti corrupti aperiam qui consequatur cumque dolore commodi ipsam molestiae neque"
    },
    {
      "tags": [
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/186.jpg",
      "price": 11.99,
      "name": "Awesome Ocean Tech",
      "description": "aut ea alias corrupti maxime minima officia beatae veritatis quis commodi iste adipisci voluptatem neque aut consectetur deleniti"
    },
    {
      "tags": [
        "Utah",
        "Sand",
        "Desert"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/187.jpg",
      "price": 14.99,
      "name": "Practical Desert Tech",
      "description": "enim deserunt ut esse aut molestiae quibusdam incidunt aut voluptates voluptatem corporis vel ut quo exercitationem consequatur sunt voluptatem qui quibusdam consequatur"
    },
    {
      "tags": [
        "Person",
        "Bicycle"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/188.jpg",
      "price": 12.99,
      "name": "Licensed Bicycle Tech",
      "description": "a ratione aut sed similique excepturi blanditiis provident ullam quaerat occaecati nulla ad rerum quo aperiam est doloribus reprehenderit accusamus"
    },
    {
      "tags": [
        "Hands",
        "Tea"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/189.jpg",
      "price": 20.99,
      "name": "Handcrafted Tea Tech",
      "description": "repellat beatae adipisci aperiam quae esse alias voluptates quibusdam rerum quis optio aliquid esse est rerum est eos ea corporis"
    },
    {
      "tags": [
        "Ocean",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/190.jpg",
      "price": 14.99,
      "name": "Gorgeous Ocean Tech",
      "description": "neque vel cum laborum repudiandae aspernatur similique laudantium beatae reiciendis quo reprehenderit qui"
    },
    {
      "tags": [
        "Lake",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/191.jpg",
      "price": 16.99,
      "name": "Small Lake Tech",
      "description": "et assumenda blanditiis unde labore voluptas tenetur quod molestias et veritatis totam id consequuntur aliquam nostrum ea dolores amet sit quia ex quidem"
    },
    {
      "tags": [
        "Trees",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/192.jpg",
      "price": 15.99,
      "name": "Licensed Forest Tech",
      "description": "soluta consequatur ut error odit dolorem dolor eos hic libero qui et est itaque quam laudantium quo molestiae enim perferendis"
    },
    {
      "tags": [
        "Trees",
        "Fog",
        "Forest"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/193.jpg",
      "price": 14.99,
      "name": "Intelligent Fog Tech",
      "description": "ut vero dicta accusamus velit beatae modi dolores qui et voluptate perspiciatis voluptas cum facere omnis eum perspiciatis eius ab voluptates"
    },
    {
      "tags": [
        "Beach",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/194.jpg",
      "price": 12.99,
      "name": "Handcrafted Ocean Tech",
      "description": "dicta eum voluptates quisquam hic qui ad enim nihil nihil quia iure odit aut a"
    },
    {
      "tags": [
        "Grass",
        "Flowers",
        "Plants"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/195.jpg",
      "price": 16.99,
      "name": "Intelligent Plants Tech",
      "description": "ea quis distinctio ea ratione esse et maxime consectetur eos neque error sint aspernatur facere ut necessitatibus nemo impedit rerum non velit"
    },
    {
      "tags": [
        "City",
        "Buildings"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/196.jpg",
      "price": 15.99,
      "name": "Rustic City Tech",
      "description": "reiciendis omnis ea quasi ab cum et enim dolorem quas facere corrupti"
    },
    {
      "tags": [
        "Waterfall",
        "Fog",
        "Mountains"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/197.jpg",
      "price": 13.99,
      "name": "Fantastic Fog Tech",
      "description": "fuga ut consequatur inventore aut voluptatibus quia commodi velit nemo officiis"
    },
    {
      "tags": [
        "Machine",
        "Antique",
        "Camera"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/198.jpg",
      "price": 15.99,
      "name": "Gorgeous Camera Tech",
      "description": "numquam esse excepturi odit excepturi et maxime quia quia illum aperiam iure a ea et ut aperiam"
    },
    {
      "tags": [
        "Person",
        "Guitar"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/199.jpg",
      "price": 19.99,
      "name": "Small Person Tech",
      "description": "nostrum error quod libero pariatur minus enim suscipit molestiae aliquid praesentium repudiandae repellendus voluptatum illum qui et sapiente voluptas"
    },
    {
      "tags": [
        "City",
        "Buildings",
        "Architecture"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/200.jpg",
      "price": 17.99,
      "name": "Rustic City Tech",
      "description": "odit eaque aut possimus corrupti nobis voluptatibus veritatis reprehenderit natus debitis"
    }
  ]

  exports.postTeam03 = (req, res, next) => {
    res.redirect('/ta03');
}; 

exports.getTeam03 = (req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        parsingJsonObj: parsingJsonObj,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};



//_______WEEK 03________// 

exports.getTeam04 = (req, res, next) => {
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
}
