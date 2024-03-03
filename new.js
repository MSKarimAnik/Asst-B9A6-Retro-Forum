const loadAllPost = document.getElementById('load-All-Post');
const AllPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    data.posts.forEach((post) => {
        const div = document.createElement('div');
        div.className = 'bg-gray-100 rounded-3xl';   

    let indicatorColor;
    if (post.isActive) {
    indicatorColor = 'bg-green-600';
    }
     else {
    indicatorColor = 'bg-red-600';
    }
    
    const newDiv = div.innerHTML = `
    
    <div class="flex gap-4 m-8 p-8">
    
    <div class="indicator">
    <span class="indicator-item badge ${indicatorColor}"></span> 
    <div class="grid w-16 h-16 bg-white place-items-center rounded-full">
    <img class="rounded-full" src="${post.image}" alt="">
    </div>
    
    </div>
    
    <div>
        <div class="flex gap-5 mb-4">
        <p>${post.category}</p>
        <p>${post.author.name}</p>
        </div>

        <div>   <p class="text-xl font-bold mb-4">${post.title}</p></div>
        <div class="mb-4">${post.description}   </div>
                    <hr>
        <!-- last line -->
        <div class="flex justify-between">
            <div class="flex gap-4">
            <img src="images/Group 13.png" alt="">
            <p>${post.comment_count}</p>
            <img src="images/Group 16.png" alt="">
            <p>${post.view_count}</p>
            <img src="images/tabler-icon-clock-hour-9.png" alt="">
            <p>${post.posted_time}</p>
        </div>
        
        <div>
            <button id="markAsReadButton"" ><img src="images/Group 40106.png" alt=""></button>
            

        </div>
        </div>
        </div>
        </div>`;
        loadAllPost.appendChild(div);
    })
};
const loadLatestNews = document.getElementById('load-Latest-News');
const loadlatest = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList = 'border-2 pl-8 p-4 rounded-xl';

        const newDiv = div.innerHTML = `
            <img src="${data.cover_image}" alt="">
            <div class="flex gap-4 mt-2">
                <img src="images/Frame.png" alt="">
                <p>${data.author?.posted_date}</p>
            </div>
            <h2 class="text-xl font-bold mt-2">${data.title}</h2>
            <p class="mt-2">${data.description}</p>
            <div class="flex gap-4 items-center mt-2">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="${data.profile_image}" alt="">
                    </div>
                </div>
                <div>
                    <h2>${data.author?.name}</h2>
                    <p>${data.author?.designation}</p>
                </div>
            </div>`;
        loadLatestNews.appendChild(div);
    });
};

AllPost();
loadlatest();
